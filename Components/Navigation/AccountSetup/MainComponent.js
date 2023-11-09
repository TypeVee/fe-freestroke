import React from 'react';
import { View, Text } from 'react-native';
import Signin from './Signin';
import Signup from './Signup';
import AuthDetails from './Auth';

const MainComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      
      <Signin />
      <Signup />
      <AuthDetails />
    </View>
  );
};

export default MainComponent;
