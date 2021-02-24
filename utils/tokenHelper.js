import { NativeAppEventEmitter } from "react-native";
import { AsyncStorage } from 'react-native';

export const storeToken = async (token) => {
    console.log("STORING TOKEN...");
    try {
        await AsyncStorage.setItem(
          'userToken',
          token
        );
    } catch (error) {
        // Error saving data
    }
}

export const removeToken = async () => {
    console.log("REMOVING TOKEN...");
    try {
        await AsyncStorage.removeItem(
            'userToken',
        );
    } catch (error) {
        // Error saving data
    }
}