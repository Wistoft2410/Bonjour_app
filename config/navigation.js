import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed';
import SignIn from '../screens/SignIn';
import SignIn1 from '../screens/SignIn1';
import SignUp from '../screens/SignUp';

// Sign up flow
import SignUp1 from '../screens/flows/signUpFlow/signUp1';
import SignUp2 from '../screens/flows/signUpFlow/signUp2';
import SignUp3 from '../screens/flows/signUpFlow/signUp3';
import SignUp4 from '../screens/flows/signUpFlow/signUp4';
import SignUp5 from '../screens/flows/signUpFlow/signUp5';
import SignUp6 from '../screens/flows/signUpFlow/signUp6';
import SignUp7 from '../screens/flows/signUpFlow/signUp7';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const FeedStack = createStackNavigator();
export const FeedStackScreen = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feed" component={Feed} />
  </FeedStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sign in" component={SignIn} options={{headerShown: false}}/>
    <AuthStack.Screen name="Sign in1" component={SignIn1} options={{headerShown: false}}/>
    <AuthStack.Screen 
      options={{
        headerShown: false,
        gesturesEnabled: false,
      }}
      name="Sign up"
      component={SignUpStackScreen}
    />
  </AuthStack.Navigator>
);

const SignUpStack = createStackNavigator();
export const SignUpStackScreen = () => (
  <SignUpStack.Navigator>
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="The Deal" component={SignUp1} />
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="Name" component={SignUp3} />
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="Email" component={SignUp4} />
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="Password" component={SignUp5} />
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="Gender" component={SignUp6} />
    <SignUpStack.Screen options={{cardStyleInterpolator: forFade, headerShown: false}} name="YourThing" component={SignUp7} />
  </SignUpStack.Navigator>
);