import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Thing from './Thing';

export default ( props ) => {
    useEffect(() => {
        //console.log(props.xOffset);
    });
        return(
            <View style={styles.container}>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Running' size='25' panProp={pan}/>
                    <Thing thingTitle='Skiing' />
                    <Thing thingTitle='Music' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
                <View style={styles.thingsRow}>
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                    <Thing thingTitle='Jazz' />
                    <Thing thingTitle='Golf' />
                    <Thing thingTitle='Cycling' />
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    thingItem: {
        backgroundColor: '#00E48C',
        padding: 12,
        borderRadius: 50,
        margin: 5,
    },
    thingName: {
        color: '#000',
        fontWeight: '600',
        fontSize: 18
    },
    thingsRow: {
        flexDirection: 'row',
    }
  });