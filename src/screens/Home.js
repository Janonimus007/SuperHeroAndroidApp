import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, ToastAndroid, ViewPropTypes, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'axios';
import { Avatar, Button, Searchbar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const [hero, setHero] = useState(null);
  const [heroSearch, setHeroSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()
  const handleChange =(heroName)=>{
    setHero(heroName)
  }
  const cleanSearch =()=>{
    setHeroSearch(null)
    setHero(null)
  }
  const theStrongest =(heros)=>{
    console.log('el mas fuerte');
  }
  const searchHero =()=>{
    const url = 'https://superheroapi.com/api/5018736881482580'
    if(!hero){
      ToastAndroid.showWithGravity(
        "write your superhero",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }else{ 
      setLoading(true)
      axios({
      method: 'get',
      url: `${url}/search/${hero}`,
    }).then((response) => {
   
      setHeroSearch(response.data.results);
     if(response){
       setLoading(false)
     }
    });
    
    }

  }
  const showHero =(showHero)=>{
      navigation.navigate('showhero',showHero)
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
        {heroSearch != null &&(
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
           <Button
            onPress={cleanSearch}
            style={styles.SearchButton}
            mode='contained'
           >Clean search</Button>
            <Button
              onPress={()=>theStrongest(heroSearch)}
              style={styles.SearchButton}
              mode='contained'
            >the strongest</Button>
          </View>

        )}

        {heroSearch != null &&(
          <ScrollView>
            {
              heroSearch.map((superHero)=>(
                <TouchableOpacity key={superHero.id} onPress={()=>showHero(superHero)}>
                <View style={styles.containerHero}> 
                  <Avatar.Image size={50} 
                  source={{uri:`${superHero.image.url}`}}
                  style={{marginRight:10}} />
                  <Text style={styles.nameHero}>{superHero.name}</Text>
                </View>
                </TouchableOpacity>
     
              ))
            }
          </ScrollView>
        )}
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
  },
  containerHero:{
    flex:1,flexDirection:'row',
    marginVertical:7,
    alignItems:'center',
    marginHorizontal:10,
    borderBottomWidth:0.2,
    borderBottomColor:'red',
  
  },
  nameHero:{
    color:'white',
    fontSize:20

  }
})
