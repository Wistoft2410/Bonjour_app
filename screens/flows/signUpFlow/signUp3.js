import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import GoconInput from '../../../components/GoconInput';

export default ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);
    
    const handlePress = () => {
        //Keyboard.dismiss();
        navigation.navigate('Email', {
          name: name,
        });
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

    return(
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} animation={fadeIn} iterationDelay={250}>
                  WHAT'S YOUR{"\n"}NAME...?
                </Animatable.Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                  style={styles.nameInput}
                  onChangeText={(value) => {
                    if (value === "") {
                        setName(value);
                        setButtonState(true);
                      } else {
                        setName(value)
                        setButtonState(false);
                      }
                    }
                  }
                  value={name}
                  autoFocus={true}
                  placeholder="John Hoe"
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
});