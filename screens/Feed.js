import React from 'react';
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import {AuthContext} from '../utils/authContext';

export default () => {
    const { signOut } = React.useContext(AuthContext);

    return(
        <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={signOut} />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });