import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../utils/authContext';
// import GoconInput from '../../../components/GoconInput';

export default ({ navigation, route }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);
    const [inputState, setInputState] = React.useState(false);

    const { signIn } = React.useContext(AuthContext);

    const handlePress = () => {
        signIn({username: email, password: password})
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
    const inputStateStyle = !inputState ? styles.lowOpacity : "";
    return(
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} animation={fadeIn} iterationDelay={250}>
                  LOG IN
                </Animatable.Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                  style={styles.nameInput}
                  onChangeText={(value) => {
                    if (value === "") {
                        setEmail(value);
                        setButtonState(true);
                        setInputState(false);
                      } else {
                        setEmail(value);
                        setInputState(true);
                      }
                    }
                  }
                  value={email}
                  autoFocus={true}
                  placeholder="john@does.com"
              />            
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                  style={[styles.nameInput,inputStateStyle]}
                  onChangeText={(value) => {
                    if (value === "") {
                        setPassword(value);
                        setButtonState(true);
                      } else {
                        setPassword(value)
                        setButtonState(false);
                      }
                    }
                  }
                  value={password}
                  autoFocus={true}
                  placeholder="Password"
                  editable={inputState}
                  secureTextEntry={true}
              />            
            </View>
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
                    Log in
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
    marginTop: '30%',
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
});