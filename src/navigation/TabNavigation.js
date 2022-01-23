import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAccount from '../screens/MyAccount';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
           name="Welcome to home" 
           component={StackNavigation} 
          options={{headerShown:false}}

        />
        <Tab.Screen name="myacountt" component={MyAccount} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

