import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyAccount, Map, Saved, MainComponent } from './index';

const Tab = createBottomTabNavigator();

export default function NavigationBar({ user }) {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: '#0f98e1',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} /> 
      <Tab.Screen name="Map" component={Map} />  
      <Tab.Screen name="Saved" component={Saved} />  
      {user ? (
        <Tab.Screen name="My Account" component={MyAccount} />
      ) : (
        <Tab.Screen name="Log in" component={MainComponent} />
      )}
    </Tab.Navigator>
  );
}
