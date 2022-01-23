import React from 'react'
import { View, StyleSheet, Image,StatusBar } from 'react-native'
const SplashScreen = () => {
  return (
    <>
    <StatusBar backgroundColor={'white'}/>
    <View style={styles.containerSplash}>
      <Image
        style={styles.imageStyle}
        source={require('../assets/images/supermanlogo.jpg')}
      />
    </View>
    </>

  )
}

export default SplashScreen
const styles = StyleSheet.create({
  containerSplash:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  imageStyle:{
    width:'100%',
    height:'43%',
    
  }
})