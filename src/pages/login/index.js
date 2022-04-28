import React, {useEffect, useState} from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import styles from './styles';
import api from '../../services/api'

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    (async() => {
      const token = await AsyncStorage.getItem('@CodeApi:token')
      const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'))
    })
  })

  async function entrar() {
    try{
      if(usuario === '' || usuario === null || usuario === undefined){
        Alert.alert('Digite seu E-mail ou CPF para entrar');
      }
  
     if(password === '' || password === null || password === undefined){
        Alert.alert('Digite sua Senha para entrar');
      }

      const res = await api.post('/usuarios/login', {
        usuario,
        password
      })

      const { user, token } = res.data
      console.log(res.data)
      //setando user e o token no AsyncStorage
      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ])

      if(user.level === 1){
        Alert.alert('AQUI')
        navigation.navigate('usuarioComum')
      }
      else{
        if(user.level === 999){
          navigation.navigate('administrador')
        }
        else{
          Alert.alert('Oops! Este usuário está desativado! :(')
        }
      }
    }catch(err){
      Alert.alert(`Erro ao cadastrar: ${err.message}`)
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
          <TextInput 
            style={styles.input}
            placeholder="E-mail ou CPF"
            autoCorrect={false}
            onChangeText={(value)=> setUsuario(value)}
          />

          <TextInput 
            style={styles.input}
            placeholder="Senha"
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
          
          <TouchableOpacity
            onPress={ () => navigation.navigate('Cadastrar')}
          >
            <Text style={styles.textBtn}>Não possui o cadastro? Clique aqui para cadastrar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}
