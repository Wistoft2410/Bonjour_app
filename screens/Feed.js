import React from 'react';
import { StyleSheet, View, Text, StatusBar, Button, TouchableOpacity, Image} from 'react-native';
import {AuthContext} from '../utils/authContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // https://oblador.github.io/react-native-vector-icons/
import * as Animatable from 'react-native-animatable';

export default ({ navigation, route }) => {
 
    const { signOut } = React.useContext(AuthContext);

    const profile = () => {
      navigation.navigate('Profile');
    }
    const feed = () => {
        navigation.navigate('Feed');
      }
    
    const fadeOut = {
        from: {
            opacity: 1,
            zIndex: 99,
        },
        to: {
            opacity: 0,
            zIndex: -99,
        },
    };

    return(
      
      <View style={styles.container}>
          <Animatable.View style={styles.logoContainer} animation={fadeOut} duration={1000} delay={1000}> 
              <Image
              style={styles.logo}
              source={require('../assets/gocon-logo.png')}
              />
              <Text style={styles.tagline}>SOCIAL. DONE RIGHT</Text>
          </Animatable.View> 

          <View style={styles.nav}> 
          <TouchableOpacity onPress={feed}>
                  <Icon name="globe" size={35} color="#000" /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={profile}>
                  <Icon name="user-circle" size={35} color="#000" />
            </TouchableOpacity>
          </View>
          
          
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#000',
    },
    nav:{
      height: '10%',
      width: '100%',
      backgroundColor: '#00E864',
      position: 'absolute',
      bottom:0,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    feed:{
      height: '90%',
      justifyContent:'center',
      alignItems: 'center',
    },
    text:{
      color:'#00E864',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      backgroundColor: '#000',
      width: '100%',
      alignItems: 'center',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
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
   
  });