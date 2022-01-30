import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity,RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, Avatar, Button } from 'react-native-paper';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
/**
 * 
 * @param {any}  
 * @returns {void}
 */
const FilterSuperHero = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  const [heros, setHeros] = useState(null);
  const [firstload, setFirstload] = useState(false);
  const route = useRoute()
  const navigation = useNavigation()
  useEffect(() => {
    if(firstload ===false){
      setHeros(route?.params?.results)
      setFirstload(true)
    }
  }, [heros]);
  const showHero =(showHero)=>{
    navigation.navigate('showhero',showHero)
  }
  const orderBy =(more)=>{
    if(more === 'moreStrong'){
      console.log('morestrong');
      heros.sort((o1,o2)=>{
        if(o1.powerstats.power<o2.powerstats.power){
          return -1
        }else if(o1.powerstats.power>o2.powerstats.power){
          return 1
        }else{
          return 0
        }
      })
    }else{
      console.log('moreheight');
      heros.sort((o1,o2)=>{
        if(o1.powerstats.combat<o2.powerstats.combat){
          return -1
        }else if(o1.powerstats.combat>o2.powerstats.combat){
          return 1
        }else{
          return 0
        }
      })
    }
    onRefresh()
  }

  return (
    <View style={styles.container}>
      <NavBar/>
      <ImageBackground
       source={require('../assets/images/blackimage.jpg')} 
      resizeMode="cover"
      style={styles.imageback}>
        {heros == null && (<Text style={{color:'white',textAlign:'center',fontSize:40}}>No results found</Text>)}
         {heros != null &&(
          <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>
              <Button mode='contained' color='white' onPress={()=>orderBy('moreStrong')}>Greater power</Button>
              <Button mode='contained' color='white' onPress={()=>orderBy('moreHeight')}>Better combat</Button>
            </View>
            {
              heros?.map((superHero)=>(
                <TouchableOpacity key={superHero.id} onPress={()=>showHero(superHero)}>
                <View style={styles.containerHero}> 
                {/* {console.log('informacion, ',superHero)} */}
                  <Avatar.Image size={50} 
                  source={{uri:`${superHero.image.url}`}}
                  style={{marginRight:10}} />
                  <View>
                    <Text style={styles.nameHero}>{superHero.name}</Text>
                     {superHero.powerstats.power==='null'?
                        <Text style={styles.nameHero}>Power: unknown</Text>:
                        <Text style={styles.nameHero}>Power: {superHero.powerstats.power}</Text>}
                      {superHero.powerstats.combat==='null'?
                        <Text style={styles.nameHero}>Combat: unknown</Text>:
                        <Text style={styles.nameHero}>Combat: {superHero.powerstats.combat}</Text>}
                  </View>
                </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        )}
      </ImageBackground>
    </View>
  );
};

export default FilterSuperHero;
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imageback:{
    width:'100%',
    flex:1,
    justifyContent:'center',
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

