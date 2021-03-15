import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';



export default () => {
  

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
      <Animatable.View style={styles.logoContainer} >
        <Image
          style={styles.logo}
          source={require('../assets/gocon-logo.png')}
        />
        <Animatable.Text animation={fadeIn} duration={500} delay={1100} style={styles.tagline}>SOCIAL. DONE RIGHT</Animatable.Text>
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
      resizeMode: 'contain'
    }, 
    tagline: {
      marginTop: -20,
      color: '#fff',
      fontWeight: '700',
      fontSize: 22
    },
  });