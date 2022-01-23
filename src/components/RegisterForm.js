import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerApi } from '../api/user'
const RegisterForm = (props) => {
  const [loading, setLoading] = useState(false)
  const {goto} = props
  const formik =  useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit:async(formData)=>{
      setLoading(true)
      try {
        await registerApi(formData)
        console.log('ok te registraste con exito wena compare');
        setLoading(false)
        goto()
      } catch (error) {
        console.log('error');
        alert('no se pudo realizar el registro')  
        setLoading(false)   
      }
      console.log('registro de data');
      console.log(formData);
    }
  })
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/superheroimage.jpg')} resizeMode="cover" style={styles.imagestyles}>
        <TextInput
        label={'Email'}
        activeUnderlineColor='black'
        selectionColor='blue'
        style = {styles.inputRegister}
        onChangeText={(text)=>formik.setFieldValue("email",text)}
        values={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label={'username'}
        activeUnderlineColor='black'
        selectionColor='blue'
        style = {styles.inputRegister}
        onChangeText={(text)=>formik.setFieldValue("username",text)}
        values={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        secureTextEntry
        label={'password'}
        activeUnderlineColor='black'
        selectionColor='blue'
        style = {styles.inputRegister}
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        values={formik.values.email}
        error={formik.errors.email}
      />   
      <TextInput
        secureTextEntry
        label={'repeat password'}
        activeUnderlineColor='black'
        selectionColor='blue'
        style = {styles.inputRegister}
        onChangeText={(text)=>formik.setFieldValue("repeatPassword",text)}
        values={formik.values.email}
        error={formik.errors.email}
      /> 
      <Button
        style={styles.buttonRegister}
        onPress={formik.handleSubmit} 
        loading={loading}
        mode='contained'
      >Register me</Button>    
      <Button
        style={styles.buttonRegister}
          
        mode='contained'
        onPress={goto}
      >Login</Button>      
      </ImageBackground>
               
    </View>
  )
}

export default RegisterForm
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  inputRegister:{
    marginTop:10,
    marginHorizontal:20
  },
  buttonRegister:{
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
    email:'',
    username:'',
    password:'',
    repeatPassword:''
  }
}
function validationSchema(){
  return{
    email:Yup.string().email(true).required(true),
    username:Yup.string().required(true),
    password:Yup.string().max(20).min(6).required(true),
    repeatPassword:Yup.string().required(true).oneOf([Yup.ref("password")],true),
  }
}