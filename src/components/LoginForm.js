import React, { useState } from 'react'
import { useFormik } from 'formik'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import useAuth from '../hooks/useAuth'
import { loginApi } from '../api/user'
import * as Yup from 'yup'

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()
  const {goto} = props

  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit : async (formData)=>{
      setLoading(true)
      try {
        const response = await loginApi(formData)
        console.log(response);
        if(response.statusCode) throw 'usuario o email invalido'
        login(response)
        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
  })
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/superheroimage.jpg')} resizeMode="cover" style={styles.imagestyles}>
       <TextInput
        style={styles.TextLogin}
        label={"Email"}
        selectionColor='blue'
        activeUnderlineColor='black'
        onChangeText={(text)=>formik.setFieldValue("identifier",text)}
        error ={formik.errors.identifier}
        values={formik.values.identifier}
      />
      <TextInput
        secureTextEntry
        style={styles.TextLogin}
        label={"Password"}
        selectionColor='blue'
        activeUnderlineColor='black'
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        error ={formik.errors.password}
        values={formik.values.password}
      />
      <Button
       style={styles.buttonLogin}
       mode='contained'
       onPress={formik.handleSubmit}
       loading = {loading}
       >get into</Button>
      <Button
      style={styles.buttonLogin}
       mode='contained'
       onPress={goto}
       >Register</Button> 
    </ImageBackground>
           
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  TextLogin:{
    marginTop:10,
    marginHorizontal:20
  },
  buttonLogin:{
    marginVertical:10,
    marginHorizontal:20

  },
  imagestyles:{
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center'
  }
})


function initialValues(){
  return{
    identifier:'',
    password:''
  }
}

function validationSchema (){
  return{
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  }
}