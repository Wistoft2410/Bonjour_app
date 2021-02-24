import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('Name');
    }

    const fadeOut = {
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
    };

    return(
        <View style={styles.container}>
            <Animatable.View style={styles.contentsContainer}>
                <View style={styles.heroContainer}>
                    <Text style={styles.hero}>
                        HERE'S{"\n"}THE DEAL.
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>
                        For a long time now, being social on the internet literally meant having to sell yourself. 
                        {"\n"}{"\n"}
                        We believe that personal data is a fundamental human right and that is why we’ve chosen to stay out of the industry.  
                        {"\n"}{"\n"}
                        By doing social right.
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={() => handlePress()}
                    >
                        <Text style={styles.actionText}>
                            Let's do this!
                        </Text>
                    </TouchableOpacity> 
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%'
    },
    contentsContainer: {
        backgroundColor: '#0C2F1B',
        alignItems: 'center',
        height: '90%',
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
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