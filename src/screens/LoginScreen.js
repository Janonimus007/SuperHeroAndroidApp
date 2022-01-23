import React, { useState } from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LoginScreen = () => {
  const [showLogin, setShowLogin] = useState(true)
  const goto =()=>{
    setShowLogin(!showLogin)
  }
  return (
    <View style={{flex:1}}>
      {showLogin?<LoginForm goto={goto}/>:<RegisterForm goto={goto}/>}
    </View>
  )
}

export default LoginScreen
