import React from 'react';
import { StyleSheet, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import {AuthContext} from '../utils/authContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // https://oblador.github.io/react-native-vector-icons/

export default ({ navigation, route }) => {
  
    const { signOut } = React.useContext(AuthContext);

    const profile = () => {
        navigation.navigate('Profile');
      }
      const feed = () => {
          navigation.navigate('Feed');
        }

    return(
      
        <View style={styles.container}>
          <View style={styles.feed}>
            <Text style={styles.text}>Profile</Text>
            <TouchableOpacity onPress={signOut}>
                  <Icon name="sign-out" size={35} color="#fff" /> 
            </TouchableOpacity>
          </View>
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
    
  });