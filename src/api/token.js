import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setTokenApi(token){
  try {
    await AsyncStorage.setItem("token",token)
    console.log('estoy viendo el token ',token);
    return true
  } catch (error) {
    return null;
  }
}
export async function getTokenApi(){
  try {
    const token = await AsyncStorage.getItem("token")
    return token
  } catch (error) {
    return null;
  }
}

export async function removeTokenApi(){
  try {
    await AsyncStorage.removeItem("token")
    return true
  } catch (error) {
    return null
  }
}