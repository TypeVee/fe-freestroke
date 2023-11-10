import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './Components/Navigation/NavigationBar';
import { SingleLocation } from './Components/Locations';
import { createStackNavigator } from '@react-navigation/stack';
import Achievements from './Components/MyAccount/AchievmentButton';
import LocationHistory from './Components/MyAccount/LocationHistoryButton';
import AddLocationMap from './Components/Maps';
import PostLocation from './Components/Locations/PostLocation';
import AuthDetails from './Components/Navigation/AccountSetup/Auth';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={NavigationBar} options={{ headerShown: false }} initialParams={{ user }} />
        <Stack.Screen name="Single Location" component={SingleLocation}   
        options={{headerTitle: '', headerTransparent: true}}
        />
        <Stack.Screen name="Achievments" component={Achievements} initialParams={{ user, setUser }} />
        <Stack.Screen name="Location History" component={LocationHistory} initialParams={{ user, setUser }}/>
        <Stack.Screen name="Add Location Map" component={AddLocationMap} initialParams={{ user, setUser }}/>
        <Stack.Screen name="Post Location" component={PostLocation} options={{ headerTitle: '', headerTransparent: true }} initialParams={{ user, setUser }}/>
        <Stack.Screen name="Auth Details" component={AuthDetails} initialParams={{ user, setUser }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
