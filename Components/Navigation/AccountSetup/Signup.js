import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {db} from "../../../localDatabase/firebase"


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: displayName,
        })
        console.log(userCredential);
      })
      .then(() => {
        const user = auth.currentUser;
        return db.collection('users').doc(user.uid).set({
          displayName: displayName,
          email: email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
            <TextInput
        placeholder="Enter your display name"
        value={displayName}
        onChangeText={(text) => setDisplayName(text)}
      />
      <Button
        title="Sign Up"
        onPress={signUp}
      >
        <Text>Sign Up</Text>
      </Button>
    </View>
  );
};

export default Signup;