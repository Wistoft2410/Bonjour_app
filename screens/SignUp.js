import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
  <>
    <Button title="Sign Out" onPress={() => alert('todou!')} />
    <Button title="Sign Up" onPress={() => navigation.push('Sign up')} />
  </>
);