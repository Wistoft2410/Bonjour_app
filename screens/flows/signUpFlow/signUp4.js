import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { withOrientation } from 'react-navigation';
// import GoconInput from '../../../components/GoconInput';

export default ({ navigation, route }) => {
    const [email, setEmail] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);
    const [emailTestText, setEmailTestText] = React.useState(true); // Hide validEmailText
    
    const nextPage = () => {
      navigation.navigate('Password', {
        name: route.params.name,
        email: email
      });
    }
    const checkEmail = async () => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `AsyncStorage`
      fetch('https://myso1ve.dk/bonjour/register.php', { // Sends data to server to check if email is used
          method: 'post',
          header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
          },
          body:JSON.stringify({
              "checkEmail": "true", // send chechEmail: true, to tell register.php to check for email and not to create new user
              "email": email
          })
      })
      .then((response) => response.json())
          .then((responseJson) =>{
              if(responseJson == "MNU"){ // MNU: Mail not used
                nextPage();
              }else{
                  alert(responseJson);
              }
          })
          .catch((error)=>{
              console.error(error);
          });
      
  }
  // check if email is vaild
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }
    const handlePress = () => {
        checkEmail();
    }

    const fadeIn = {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    };

    const buttonStateStyle = buttonState ? styles.lowOpacity : "";
    const emailTestTextStyle = emailTestText ? styles.hidden : "";
    return(
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} animation={fadeIn} iterationDelay={250}>
                  WHAT'S YOUR{"\n"}EMAIL...?
                </Animatable.Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                  style={styles.nameInput}
                  onChangeText={(value) => {
                    if (value === "") {
                        setEmail(value);
                        setButtonState(true);
                      } else {
                        setEmail(value)
                        const emailTest = validateEmail(value);
                        if(emailTest == true){
                          setButtonState(false);
                          setEmailTestText(true); // hide validEmailText
                        }else{
                          setButtonState(true);
                          setEmailTestText(false); // show validEmailText
                        }
                      }
                    }
                  }
                  value={email}
                  autoFocus={true}
                  placeholder="john@does.com"
                  keyboardType="email-address"
                  autoCapitalize='none'
              />            
            </View>
            <Text style={[styles.validEmailText, emailTestTextStyle]}>
                   Please enter valid email
            </Text>
        </View>
        <KeyboardAvoidingView 
          style={styles.actionContainer}
          behavior={ Platform.OS === 'ios'? 'padding': null}
        >
           
            <TouchableOpacity 
                disabled={buttonState}
                style={[styles.action, buttonStateStyle]}
                onPress={() => handlePress()}
            >
                <Text style={styles.actionText}>
                    What's next?
                </Text>
            </TouchableOpacity> 
        </KeyboardAvoidingView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },
  contentsContainer: {
      alignItems: 'center',
      marginTop: '10%',
      width: '100%',
      paddingHorizontal: 30,
  },
  heroContainer: {
    alignSelf: 'flex-start',
    marginTop: '5%',
  },
  hero: {
      color: '#00E864',
      fontSize: 40,
      fontWeight: "700",
  },
  bodyContainer: {
      marginTop: 35,
      paddingRight: 50,
  },
  body: {
      color: '#fff',
      fontSize: 20,
      fontWeight: "700",
  },
  actionContainer: {
    alignItems: 'center',
    marginBottom: '13%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
},
action: {
    backgroundColor: '#00E864',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginBottom: 13,
    borderRadius: 100,
},
  actionText: {
      color: '#000',
      fontSize: 20,
      fontWeight: "700",
  },
  inputContainer: {
    marginTop: '50%',
    width: '100%',
    alignItems: 'center'
  },
  nameInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 15,
    fontWeight: '600',
    fontSize: 16,
  },
  inputNametag: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  nametag: {
    color: '#fff',
    fontWeight: '600'
  },
  lowOpacity: {
    opacity: 0.4,
  },
  validEmailText:{
    color:'#fff',
    marginTop: '2%'
  },
  hidden:{
    display: 'none'
  }
});