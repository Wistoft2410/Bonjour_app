import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {AuthContext} from '../utils/authContext';

export default () => {
    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 100,
        paddingHorizontal: 15,
    },
  });