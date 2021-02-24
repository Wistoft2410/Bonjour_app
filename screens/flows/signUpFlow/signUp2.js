import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CommonActions } from '@react-navigation/native';

export default ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Name' },
            ],
          })
        );
      }, 1500);
    });

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
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} animation={fadeIn}>
                  LET'S GET YOU{"\n"}STARTED...
                </Animatable.Text>
            </View>
        </View>
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
      marginTop: 30,
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
      justifyContent: 'flex-end'
  },
  action: {
      backgroundColor: '#00E864',
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 100,
  },
  actionText: {
      color: '#000',
      fontSize: 20,
      fontWeight: "700",
  }
});