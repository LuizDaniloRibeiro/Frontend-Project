import React, {useEffect, useState} from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import api from '../../services/api'

export default function Login({ navigation }) {
  const [email, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  async function entrar() {
    try{
      if(email === '' || email === null || email === undefined){
        Alert.alert('Digite seu E-mail para entrar');
        return
      }
  
      if(password === '' || password === null || password === undefined){
        Alert.alert('Digite sua Senha para entrar');
        return
      }

      const res = api.post('/usuarios/login', {
       email,
       password
      })

      if((await res).status === '500'){
        Alert.alert('erro')
        return
      }
      else{
        navigation.navigate('Mind Consulting')      
      }

    }catch(error){
      Alert.alert(`Erro ao cadastrar: ${err.message}`)
      return
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Image 
        source={require('../../assets/img/logo.png')}
        style={{width: '50%', height: 45, alignItems: 'center', justifyContent: 'center'}}
      /> */}
      
      <Image
        style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
        source={require('../../assets/img/logo.png')}
      />
      <View style={styles.imgBackground}>
        <ImageBackground  
          source={require('../../assets/img/bear.png')}
          style={{width: 400, height: 450, alignItems: 'center', justifyContent: 'center', opacity: 0.9}}  
        >
          <TextInput 
            style={styles.input}
            placeholder="Seu e-mail"
            autoCorrect={false}
            onChangeText={(value)=> setUsuario(value)}
          />

          <TextInput 
            style={styles.input}
            placeholder="Sua senha"
            autoCorrect={false}
            onChangeText={(value)=> setPassword(value)}
            secureTextEntry={true}
            password={true} 
          />

          <TouchableOpacity 
            style={styles.btnLogin}
            onPress={entrar}
          >
            <Text style={styles.textBtnLogin}>Entrar</Text>
          </TouchableOpacity>
        </ImageBackground>


      </View>
      <TouchableOpacity
        onPress={ () => navigation.navigate('Register')}          
      >
        <Text style={styles.textCadastrar}>Clique aqui para cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
