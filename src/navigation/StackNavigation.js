import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ShowSuperHero from '../screens/ShowSuperHero';
import FilterSuperHero from '../screens/FilterSuperHero';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const navigation = useNavigation()
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="myHome"
          component={Home} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="showhero"
          component={ShowSuperHero} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="filter"
          component={FilterSuperHero} 
          options={{headerShown:false}}
        />
      </Stack.Navigator>

  )
}

export default StackNavigation
