import React, { useEffect, useMemo, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { getTokenApi, removeTokenApi, setTokenApi } from './src/api/token';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import jwtDecode from 'jwt-decode';
import AuthContext from './src/context/AuthContext';
import Home from './src/screens/Home';
import TabNavigation from './src/navigation/TabNavigation';
import { StatusBar } from 'react-native';

const App = () => {
const [showSplash, setShowSplash] = useState(true)
const [auth, setAuth] = useState(undefined)
useEffect(() => {
  setTimeout(() => {
    setShowSplash(false)
  }, 3000);
  const getToken = async ()=>{
    const token = await getTokenApi()
    if(token){
      setAuth({
        token,
        idUser:jwtDecode(token)
      })
    }else{
      setAuth(null)
    }

    if(token){
    }
  }
  getToken()
 
}, [])
const login =(user)=>{
  console.log('estoy viendo al usuario ',user);
  setTokenApi(user.jwt)
  setAuth({
    token:user.jwt,
    idUser:user.id
  })
}

const logout =()=>{
  if(auth){
    setAuth(null)
    removeTokenApi()
  }
}
const authData = useMemo(
  ()=>({
    auth,
    login,
    logout,
  }),
  [auth]
)
if (auth === undefined) return null
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        
        {showSplash?<SplashScreen style={{flex:1}}/> : auth?
        <TabNavigation/>
        :<LoginScreen style={{flex:1}}/>}
      </PaperProvider>
    </AuthContext.Provider>

  )
}

export default App
