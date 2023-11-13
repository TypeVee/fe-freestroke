import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UserDetails from '../MyAccount/UserDetails';
import AchievmentButton from '../MyAccount/AchievmentButton';
import LocationHistoryButton from '../MyAccount/LocationHistoryButton';
import AuthDetails from './AccountSetup/Auth';
import { useUser } from './AccountSetup/UserContext';

export default function MyAccountTab({navigation}) {
  const user = useUser()
    return (
      <View 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        
        <Text>Welcome {user.displayName}</Text>
        <UserDetails />
        <AchievmentButton navigation={navigation}/>
        <LocationHistoryButton navigation={navigation}/>
        <AuthDetails/>

      </View>
    );
  }