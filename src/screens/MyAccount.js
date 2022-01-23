import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import useAuth from '../hooks/useAuth';

const MyAccount = () => {
  const {logout} = useAuth()
  return (
    <View>
      <Button 
      onPress={logout}
      mode='contained'>logout</Button>
    </View>
  );
};

export default MyAccount;
