import React, { useState, useEffect } from 'react'
import { 
    ImageBackground, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Image, 
    Alert, 
    TextInput, 
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import api from '../../services/api';


export default function Curso() {
  const [nome, setName] = useState('') 
  const [professor, setProfessor] = useState('') 
  const [categoria, setCategoria] = useState('') 
  const [descricao, setDescricao] = useState('')


  async function cadastrar(){
    try{

      if(nome === '' || nome === undefined || nome === null){
        Alert.alert('Informe o nome do curso para cadastrar');
        console.log('aquiiii');
      }

      else if(professor === '' || professor === undefined || professor === null){
        Alert.alert('Informe o nome do professor para cadastrar');
      }

      else if(categoria === '' || categoria === undefined || categoria === null){
        Alert.alert('Informe a categoria para cadastrar');
      }

      else if(descricao === '' || descricao === undefined || descricao === null){
        Alert.alert('Informe a descrição para cadastrar');
      }

      const response = await api.post('/cursos/register-curso', {
        nome,
        professor,
        categoria,
        descricao,
        nivel: 1,
      })

    }catch(err){
        Alert.alert('Não foi possível cadastrar!')
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}>

        <TouchableOpacity style={styles.addFotos}>
          <Ionicons name="md-person" size={62} color="#F82352" />
        </TouchableOpacity>
        <Text style={styles.textAddFoto}>Adicionar foto</Text>
    
        <View style={styles.imgBackground}>
          <ImageBackground 

            source={require('../../assets/img/bear.png')}
            style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center', opacity:0.9}}  
          >
          
            <TextInput 
              style={styles.input}
              placeholder="Nome do curso"
              maxLength={25}
              autoCorrect={false}
              onChangeText={(value)=> setName(value)}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Professor responsável"
              maxLength={25}
              autoCorrect={false}
              onChangeText={(value)=> setProfessor(value)}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Categoria"
              maxLength={25}
              autoCorrect={false}
              onChangeText={(value)=> setCategoria(value)}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Descrição"
              maxLength={50}
              autoCorrect={false}
              onChangeText={(value)=> setDescricao(value)}
            />
            
            <TouchableOpacity style={styles.btnLogin} onPress={cadastrar}>
              <Text style={styles.textBtnLogin}>Cadastrar</Text>
            </TouchableOpacity>           
          </ImageBackground>
          
        </View>
    </KeyboardAvoidingView>
  )
}
