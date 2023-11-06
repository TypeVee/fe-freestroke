import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyAccount } from './index';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: '#0f98e1',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Account" component={MyAccount} />
      
    </Tab.Navigator>
  );
}
