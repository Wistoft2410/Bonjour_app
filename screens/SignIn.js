import React from 'react';
import { Button, View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {AuthContext} from '../utils/authContext';
import * as Animatable from 'react-native-animatable';
import signUp1 from './flows/signUpFlow/signUp1';


export default ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);

    const handleSignupPress = () => {
        navigation.navigate('Sign up');
    }

    const handleLoginPress = () => {
        signIn({username: "Hey", password: ""});
    }

    const moveUp = {
        from: {
            marginTop: 0,
        },
        to: {
            marginTop: -300,
        },
    };

    const fadeIn = {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    };

    return(
    <View style={styles.container}>
        <Animatable.View style={styles.logoContainer} animation={moveUp} duration={400}>
            <Image
            style={styles.logo}
            source={require('../assets/gocon-logo.png')}
            />
            <Animatable.Text animation={fadeIn} duration={500} style={styles.tagline}>SOCIAL. DONE RIGHT</Animatable.Text>
        </Animatable.View> 
            <Animatable.View animation={fadeIn} duration={500} style={styles.actionContainer}>
                <TouchableOpacity 
                    style={styles.action}
                    onPress={() => handleSignupPress()}
                >
                    <Text style={styles.actionText}>
                        Let's do this!
                    </Text>
                </TouchableOpacity> 
            </Animatable.View>
            <Animatable.View animation={fadeIn} duration={500} style={styles.secondaryActionContainer}>
                <View style={styles.divider}></View>
                <TouchableOpacity 
                    style={styles.secondaryAction}
                    onPress={() => handleLoginPress()}
                >   
                    <Text style={styles.secondaryActionText}>
                        Log in
                    </Text>
                </TouchableOpacity> 
                <View style={styles.divider}></View>
            </Animatable.View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      width: '100%',
      alignItems: 'center',
    },
    logo: {
      width: '60%',
      resizeMode: 'contain',
    },
    tagline: {
      marginTop: -20,
      color: '#fff',
      fontWeight: '700',
      fontSize: 22
    },
    actionContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: '25%',
    },
    action: {
        backgroundColor: '#00E864',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 100,
    },
    actionText: {
        color: '#000',
        fontSize: 20,
        fontWeight: "700",
    },
    secondaryActionContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: '10%',
    },
    secondaryAction: {

    },
    secondaryActionText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "700",
    },
    divider: {
        height: 2,
        backgroundColor: '#fff',
        width: 80,
        marginHorizontal: 10,
    }
  });