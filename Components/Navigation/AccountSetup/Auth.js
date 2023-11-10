import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../localDatabase/firebase';

const AuthDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
      {user ? (
        <>
          <Text>{`Signed in as ${user.email}`}</Text>
          <Button title="Sign Out" onPress={userSignOut} />
        </>
      ) : (
        <Text>Signed Out</Text>
      )}
    </View>
  );
};

export default AuthDetails;
