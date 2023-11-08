import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './Components/Navigation/NavigationBar';
import { SingleLocation } from './Components/Locations';
import { createStackNavigator } from '@react-navigation/stack';
import Achievments from './Components/MyAccount/AchievmentButton';
import LocationHistory from './Components/MyAccount/LocationHistoryButton';
import AddLocationMap from './Components/Maps';
import PostLocation from './Components/Locations/PostLocation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={NavigationBar} options={{ headerShown: false}} />
        <Stack.Screen name="Single Location" component={SingleLocation}   
        options={{headerTitle: '', headerTransparent: true}}
        />
        <Stack.Screen name="Achievments" component={Achievments}/>
        <Stack.Screen name="Location History" component={LocationHistory}/>
        <Stack.Screen name="Add Location Map" component={AddLocationMap}/>
        <Stack.Screen name="Post Location" component={PostLocation}
        options={{headerTitle: '', headerTransparent: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
