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
import * as ImagePicker from 'expo-image-picker';

export default function Curso() {
  const [nome, setName] = useState('') 
  const [professor, setProfessor] = useState('') 
  const [categoria, setCategoria] = useState('') 
  const [descricao, setDescricao] = useState('')


  async function cadastrar(){
    const [cursoImage, setCursoImage] = useState('')
    try{

      if(nome === '' || nome === undefined || nome === null){
        Alert.alert('Informe o nome do curso para cadastrar');
        return 
      }

      else if(professor === '' || professor === undefined || professor === null){
        Alert.alert('Informe o nome do professor para cadastrar');
        return
      }

      else if(categoria === '' || categoria === undefined || categoria === null){
        Alert.alert('Informe a categoria para cadastrar');
        return
      }

      else if(descricao === '' || descricao === undefined || descricao === null){
        Alert.alert('Informe a descrição para cadastrar');
        return
      }

      api.post('/cursos/register-curso', {
        nome,
        professor,
        categoria,
        descricao,
        nivel: 1,
      })
      
      Alert.alert('Curso cadastrado!');

      return

    }catch(err){
        Alert.alert('Não foi possível cadastrar!')
    }
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    console.log(status)

    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões do rolo da câmera para que isso funcione');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      console.log(response)

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };


  return (
    <KeyboardAvoidingView style={styles.container}>

        <TouchableOpacity 
          style={styles.addFotos}
          onPress={openImageLibrary}
        >
          <Ionicons name="md-person" size={62} color="#F82352" />
        </TouchableOpacity>
        <Text style={styles.textAddFoto}>Adicionar imagem</Text>
    
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
