import { View} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor:'#00E3E3',height:45,width:'100%'}}>
      <IconButton
        icon="arrow-left"
        color={'black'}
        size={20}
        onPress={() => navigation.goBack()}
  />
    </View>
  );
};

export default NavBar;
