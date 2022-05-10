import React, {useEffect, useState} from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import api from '../../services/api'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
      
      <Image
        style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
        source={require('../../assets/img/logo.png')}
      />
      <View style={styles.imgBackground}>
        <ImageBackground  
          source={require('../../assets/img/bear.png')}
          style={{width: 400, height: 450, alignItems: 'center', justifyContent: 'center', opacity: 0.9}}  
        >

          <View style={styles.icon}>
            <TextInput 
              style={styles.input}
              placeholder="Seu e-mail"
              autoCorrect={false}
              onChangeText={(value)=> setUsuario(value)}            
            />
            <Icon style={styles.iconEmail} name="envelope" size={24} color="#121212"/>
          </View>

          <View style={styles.icon}>
            <TextInput 
              style={styles.input}
              placeholder="Sua senha"
              autoCorrect={false}
              onChangeText={(value)=> setPassword(value)}
              secureTextEntry={true}
              password={true} 
            />
            <Icon style={styles.iconPassword} name="lock" size={24} color="#121212"/>
          </View>

          <TouchableOpacity 
            style={styles.btnLogin}
            onPress={entrar}
          >
            <Text style={styles.textBtnLogin}>Acessar</Text>
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
