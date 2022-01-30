import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import NavBar from '../components/NavBar';
import { List } from 'react-native-paper';
/**
 * 
 * @returns view
 */
const ShowSuperHero = () => {
  const route = useRoute()
  let appearance = route.params?.appearance
  let biography=route.params?.biography
  let connections=route.params?.connections
  let imageHero = route.params?.image?.url
  let nameHero = route.params?.name
  let powerstats = route.params?.powerstats
  let heroWork = route.params?.work
  return (
    <>
    <NavBar/>
    <ImageBackground
      source={require('../assets/images/dark-image.jpg')} 
      resizeMode="cover"
      style={styles.containerImage}>
        <View style={styles.containerHeader}>
          <Image
          style={styles.imageHeroStyle}
            source={{
              uri: `${imageHero}`
            }}
          />
          <Text style={{color:'white',fontSize:20}}>{nameHero}</Text>
        </View>
        <View style={styles.containerBody}>
          <View>
            <Text style={styles.HeaderListText}>Power Stats</Text>
            <Text style={styles.itemListText}>Combat: {powerstats.combat}</Text>
            <Text style={styles.itemListText}>Durability: {powerstats.durability}</Text>
            <Text style={styles.itemListText}>Intelligence: {powerstats.intelligence}</Text>
            <Text style={styles.itemListText}>Power: {powerstats.power}</Text>
            <Text style={styles.itemListText}>Speed: {powerstats.speed}</Text>
            <Text style={styles.itemListText}>Stregth: {powerstats.strength}</Text>
          </View>
          <View>
          <Text style={styles.HeaderListText}>Appearance</Text>
            <Text style={styles.itemListText}>Gender: {appearance.gender}</Text>
            <Text style={styles.itemListText}>height: {appearance.height[0]}</Text>
            <Text style={styles.itemListText}>weight: {appearance.weight[0]}</Text>
            <Text style={styles.itemListText}>race: {appearance.race}</Text>
          
          </View>
        </View>
    </ImageBackground>
    </>

  );
};

export default ShowSuperHero;

const styles = StyleSheet.create({
  containerImage:{
    width:'100%',
    flex:1,
    justifyContent:'center',
  },
  containerHeader:{
    flex:3.5,
    alignItems:'center'
  },
  imageHeroStyle:{
    width:'50%',
    height:'75%',
    borderRadius:10,
    marginVertical:15
  },
  containerBody:{
    flex:5,
    paddingHorizontal:25,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  HeaderListText:{
    color:'white',
    marginVertical:5,
    fontSize:18
  },
  itemListText:{
    color:'white',
    marginVertical:1
  }
})