import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, ToastAndroid, ViewPropTypes, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'axios';
import { Avatar, Button, Searchbar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getMeHero } from '../api/superHero';
const Home = () => {
  const [hero, setHero] = useState(null);
  const [heroSearch, setHeroSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()
  const handleChange =(heroName)=>{
    setHero(heroName)
  }
  const searchHero = async () => {
    if(!hero){
      ToastAndroid.showWithGravity(
        "write your superhero",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }else{ 
      const result = await getMeHero(hero)
      navigation.navigate('filter',result)
    }

  }
  return (
    <>
    <StatusBar backgroundColor={'black'}/>
    <View style={styles.container}>
      <ImageBackground
       source={require('../assets/images/blackimage.jpg')} 
      resizeMode="cover"
      style={styles.imageback}>
        <Text style={styles.SearchText}>Search your super Hero</Text>
        <TextInput
          label={"Search"}
          placeholder='Ex: superman'
          selectionColor='blue'
          activeUnderlineColor='black'
          style={styles.searchInput}
          onChangeText={handleChange}
        />
        <Button
        loading={loading}
        onPress={searchHero}
        style={styles.SearchButton}
        mode='contained'>Search</Button>
      </ImageBackground>
    </View>
    
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imageback:{
    width:'100%',
    flex:1,
    justifyContent:'center',
    
  },
  SearchText:{
    color:'white',
    textAlign:'center',
    fontSize:30
  },
  searchInput:{
    marginHorizontal:20,
    marginVertical:10
  },
  SearchButton:{
    marginHorizontal:20,
    marginVertical:5
  }
})
