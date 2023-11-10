import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyAccount, Map, Saved, MainComponent } from './index';
import Icon from 'react-native-ico-material-design';


const Tab = createBottomTabNavigator();

export default function NavigationBar({ user }) {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: '#0f98e1',
    }}>

      <Tab.Screen name="Home" component={HomeScreen}  options={{
        tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Icon name="home-button" color='#489FE1'/>
          ),
        }}/> 
      <Tab.Screen name="Map" component={Map} options={{
        tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Icon name="compass-with-white-needles" color='#489FE1'/>
          ),
        }}/>  
      <Tab.Screen name="Saved" component={Saved} options={{
        tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Icon name="bookmark-ribbon"  color='#489FE1'/>
          ),
        }}/>  
        {user ? (
      <Tab.Screen name="My Account" component={MyAccount} options={{
        tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Icon name="user-shape"  color='#489FE1'/>
          ),
        }}/>
        ) : null}
      <Tab.Screen name="Log in" component={MainComponent} options={{
       tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Icon name="user-outline"  color='#489FE1'/>
          ),
        }}/>

    </Tab.Navigator>
  );
}
