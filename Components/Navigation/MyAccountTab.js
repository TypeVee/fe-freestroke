import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UserDetails from '../MyAccount/UserDetails';
import AchievmentButton from '../MyAccount/AchievmentButton';
import LocationHistoryButton from '../MyAccount/LocationHistoryButton';

export default function MyAccountTab({navigation}) {
    return (
      <View 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Welcome to your account</Text>
        <UserDetails />
        <AchievmentButton navigation={navigation}/>
        <LocationHistoryButton navigation={navigation}/>

      </View>
    );
  }