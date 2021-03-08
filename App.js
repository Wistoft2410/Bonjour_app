import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {reducer, initialState} from './utils/reducer';
import {AuthContext} from './utils/authContext';
import { AsyncStorage } from 'react-native';

import Feed from './screens/Feed';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Loading from './screens/Loading';

import { FeedStackScreen, AuthStackScreen, SignUpStackScreen } from './config/navigation';

export default function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `AsyncStorage`
                fetch('https://myso1ve.dk/bonjour/signin.php', { // Send data to server for log in
                    method: 'post',
                    header:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify({
                        "username": data.username,
                        "password": data.password
                    })
                })
                .then((response) => response.json())
                    .then((responseJson) =>{
                        if(responseJson == "SIS"){ // SIS: Sign in success
                            dispatch({
                                type: 'SIGN_IN',
                                token: 'dummy-auth-token'
                            });
                        }else{
                            alert(responseJson); // Alert error message
                        }
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
                
            },
            signOut: () => dispatch({
                type: 'SIGN_OUT'
            }),
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`

                fetch('https://myso1ve.dk/bonjour/register.php', { // Sends data to server for sign up
                    method: 'post',
                    header:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify({
                        "name" : data.name,
                        "email": data.email,
                        "password": data.password,
                        "gender": data.gender
                    })
                })
                .then((response) => response.json())
                    .then((responseJson) =>{
                        if(responseJson == "URS"){ // URS: User Registered Successfully
                            dispatch({
                                type: 'SIGN_IN',
                                token: 'dummy-auth-token'
                            });
                        }else{
                            alert(responseJson); // Alert error message
                        }
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
            },
        }),
        []
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
          console.log("Restoring user token...");
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {
            console.log("Token restore error!");
          }
          // restore token success
          if (userToken != "") {
            setTimeout(() => {
                dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            }, 2500);
          }
        };
    
        bootstrapAsync();
    }, []);

    /*return ( 
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading ? (
                    // We haven't finished checking for the token yet
                    <Stack.Screen name="Loading" component={Loading} />
                    ) : state.userToken == null ? (
                    // No token found, user isn't signed in
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                        title: 'Sign in',
                    // When logging out, a pop animation feels intuitive
                        animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                        }}
                    />
                    ) : (
                    // User is signed in
                    <Stack.Screen name="Feed" component={Feed} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );*/
    return ( 
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {state.isLoading ? (
                    // We haven't finished checking for the token yet
                    <Loading />
                    ) : state.userToken == null ? (
                    // No token found, user isn't signed in
                    <AuthStackScreen />
                    ) : (
                    // User is signed in
                    <FeedStackScreen />
                    )
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}