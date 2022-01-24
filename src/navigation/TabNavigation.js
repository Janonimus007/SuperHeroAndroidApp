import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAccount from '../screens/MyAccount';
import StackNavigation from './StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home" 
          component={StackNavigation} 
          options={{
            headerShown:false,
            tabBarIcon:()=><Icon name='home' size={20}/>
          }}

        />
        <Tab.Screen 
          name="myacountt" 
          component={MyAccount} 
          options={{
            headerShown:false,
            tabBarIcon:()=><Icon name='skull' size={20}/>
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

