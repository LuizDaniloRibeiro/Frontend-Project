import { StatusBar } from 'expo-status-bar';
import { 
    ImageBackground, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Image, 
    Alert,
    Button, 
    TextInput, 
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import React, { useState, useEffect } from 'react'
import api from '../../services/api';


export default function Register({ navigation }) {
  const [nome, setName] = useState('') 
  const [cpf, setCpf] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')

  

  function alert(){
    Alert.alert('aqui');
  }

  async function cadastrar(){
    try{
      const response = await api.post('/usuarios/register', {
        nome,
        cpf,
        email,
        password,
        level: 1,
      })
    }catch(err){
      Alert.alert(err.message);
    }
  }
  
  useEffect(() => {
    Alert.alert('Cadastrado com sucesso!');
  }, [response])
  
  return (
    <KeyboardAvoidingView style={styles.container}>

        <TouchableOpacity style={styles.addFotos}>
          <Image
            source={require('../../assets/img/logo.png')}
          />
          <Ionicons name="md-person" size={62} color="#F82352" />
        </TouchableOpacity>
        <Text style={styles.textAddFoto}>Adicionarfgdfgfdg foto</Text>
    
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
              placeholder="CPF"
              maxLength={11}
              autoCorrect={false}
              onChangeText={(value)=> setCpf(value)}
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
              password={true} 
            />
  
            <Button style={styles.btnLogin} onPress={cadastrar}>
              <Text style={styles.textBtnLogin}>Cadastrar</Text>
            </Button>           
          </ImageBackground>
          
        </View>
    </KeyboardAvoidingView>
  );
}
