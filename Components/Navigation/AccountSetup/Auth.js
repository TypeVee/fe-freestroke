import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../localDatabase/firebase';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign Out Successful');
      })
      .catch((error) => {
        console.error('Sign Out Error', error);
      });
  };

  return (
    <View>
      {authUser ? (
        <>
          <Text>{`Signed in as ${authUser.email}`}</Text>
          <Button title="Sign Out" onPress={userSignOut} />
        </>
      ) : (
        <Text>Signed Out</Text>
      )}
    </View>
  );
};

export default AuthDetails;
