import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, Avatar, Button } from 'react-native-paper';

const FilterSuperHero = () => {
  const [heros, setHeros] = useState(null);
  const route = useRoute()
  const navigation = useNavigation()
  useEffect(() => {
    setHeros(route.params.results)

  }, []);
  const showHero =(showHero)=>{
    navigation.navigate('showhero',showHero)
  }
  return (
    <View style={styles.container}>
      <NavBar/>
      <ImageBackground
       source={require('../assets/images/blackimage.jpg')} 
      resizeMode="cover"
      style={styles.imageback}>
        {heros == null && (<ActivityIndicator/>)}
         {heros != null &&(
          <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>
              <Button mode='contained' color='white'>mas fuerte</Button>
              <Button mode='contained' color='white'>mas alto</Button>
            </View>
            {
              heros?.map((superHero)=>(
                
                <TouchableOpacity key={superHero.id} onPress={()=>showHero(superHero)}>
                <View style={styles.containerHero}> 
                {/* {console.log('informacion, ',superHero)} */}
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