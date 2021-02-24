import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';

export default () => (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/gocon-logo.png')}
        />
      </View> 
    </View>
);

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
      resizeMode: 'contain'
    },
  });