import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
      })
      .catch((error) => {
        setErr(error.code);
        console.log(error);
      });
  };

  return (
    <KeyboardAwareScrollView
    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}
    enableOnAndroid={true}
    >
      <Text>Log In</Text>
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
      <Button
        title="Sign In"
        onPress={signIn}
      >
        <Text>Sign In</Text>
      </Button>
      {err && <Text>{err}</Text>}
    </KeyboardAwareScrollView>
  );
};

export default Signin;