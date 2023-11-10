import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Signin from './Signin';
import Signup from './Signup';
import AuthDetails from './Auth';


const MainComponent = () => {
  const [user, setUser] = useState(null);
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
    {user ? (
        <AuthDetails />
      ) : (
        <>
          <Signin />
          <Signup />
        </>
      )}
    </View>
  );
};

export default MainComponent;
