import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import GoconInput from '../../../components/GoconInput';

export default ({ navigation, route }) => {
    const [gender, setGender] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);
    
    const handlePress = () => {
        Keyboard.dismiss();
        alert(gender);
    }

    const handleGenderPress = (genderType) => {
        setGender(genderType);
        navigation.navigate('YourThing', {
            name: route.params.name,
            email: route.params.name,
            password: route.params.password,
            gender: gender,
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

    const genderStyle = (genderType) => {
        
    }

    const buttonStateStyle = buttonState ? styles.lowOpacity : "";

    return(
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} animation={fadeIn} iterationDelay={250}>
                  WHAT'S YOUR{"\n"}GENDER...?{route.params.password}
                </Animatable.Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity 
                    style={[styles.maleGender, genderStyle('male')]}
                    onPress={() => handleGenderPress('male')}
                >
                    <Text style={styles.genderText}>
                        MALE
                    </Text>
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={[styles.femaleGender, genderStyle('female')]}
                    onPress={() => handleGenderPress('female')}
                >
                    <Text style={styles.genderText}>
                        FEMALE
                    </Text>
                </TouchableOpacity> 
            </View>
        </View>
        <KeyboardAvoidingView 
          style={styles.actionContainer}
          behavior={ Platform.OS === 'ios'? 'padding': null}
        >
            <TouchableOpacity 
                style={[styles.action]}
                onPress={() => handlePress()}
            >
                <Text style={styles.actionText}>
                    THERE'S MORE
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
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 25,
      paddingVertical: 10,
      marginBottom: 20,
      borderRadius: 100,
  },
  maleGender: {
    backgroundColor: '#00D8FF',
    paddingHorizontal: 45,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 100,
  },
  femaleGender: {
    backgroundColor: '#FF009D',
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 100,
  },
  genderText: {
    color: '#fff',
    fontSize: 27,
    fontWeight: "400",
  },
  actionText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: "500",
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
  genderSelected: {
    //borderWidth: 2,
    borderColor: '#FFF'
  }
});