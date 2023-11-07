import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './Components/Navigation/NavigationBar';
import { SingleLocation } from './Components/Locations';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={NavigationBar} options={{ headerShown: false}} />
        <Stack.Screen name="Single Location" component={SingleLocation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
