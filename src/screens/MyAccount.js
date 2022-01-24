import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import useAuth from '../hooks/useAuth';

const MyAccount = () => {
  const {logout} = useAuth()
  return (
    <View style={styles.container}>
      <Button 
      onPress={logout}
      mode='contained'>logout</Button>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:20
  }
})
