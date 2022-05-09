import { 
    ImageBackground, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Alert,
    TextInput, 
    TouchableOpacity,
  } from 'react-native';
import styles from './styles';
import React, { useState } from 'react'
import api from '../../services/api';


export default function Register({ navigation }) {
  const [nome, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  
  async function cadastrar(){
    try{

      if(nome === '' || nome === null || nome === undefined){
        Alert.alert('Digite seu nome completo para cadastrar');
        return
      }

      if(email === '' || email === null || email === undefined){
        Alert.alert('Digite seu e-mail para cadastrar');
        return
      }

      if(password === '' || password === null || password === undefined){
        Alert.alert('Digite sua senha para cadastrar');
        return
      }

      const response = await api.post('/usuarios/register', {
        nome,
        email,
        password,
      })

      navigation.navigate('Mind Consulting');
    }catch(error){
      Alert.alert(error.message);
    }
  }
  
  
  return (
    <KeyboardAvoidingView style={styles.container}>

    
        <View style={styles.imgBackground}>
          <ImageBackground 

            source={require('../../assets/img/bear.png')}
            style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center', opacity:0.9}}  
          >
          
            <TextInput 
              style={styles.input}
              placeholder="Nome completo"
              maxLength={50}
              autoCorrect={false}
              onChangeText={(value)=> setName(value)}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="E-mail"
              keyboardType='email-address'
              autoCorrect={false}
              onChangeText={(value)=> setEmail(value)}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Senha"
              autoCorrect={false}
              onChangeText={(value)=> setPassword(value)}
              secureTextEntry={true}
            />
  
            <TouchableOpacity style={styles.btnLogin} onPress={cadastrar}>
              <Text style={styles.textBtnLogin}>Cadastrar</Text>
            </TouchableOpacity>           
          </ImageBackground>
          
        </View>
    </KeyboardAvoidingView>
  );
}
