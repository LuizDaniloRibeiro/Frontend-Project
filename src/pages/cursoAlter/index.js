import React, { useState, useEffect } from 'react'
import { 
    ImageBackground, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
    Alert,
  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import api from '../../services/api';


export default function Editar({route}) {
  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [professor, setProfessor] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')
  const [nivel, setNivel] = useState('')

    
  async function statusCurso(){
    try{
      const curso = route.params?.itens
      const nivel = curso.nivel;

      if(nivel === 1){
        console.log(nivel)

        desativar
        
        Alert.alert('Aviso!', `Curso ${curso.nome} foi desasivado`);

      }
      else if(nivel != 1){
        ativar

        Alert.alert('Aviso!', `Curso ${curso.nome} foi ativado!`);
          
      }
    }catch(err){
      if(nivel === 1){
        Alert.alert('Erro ao ativar o curso: ' + err);
      }
      else{
        Alert.alert('Erro ao desativar o curso: ' + err);
      }
    }
  }

  useEffect(() => {
    (async () => {
      const curso = route.params?.itens
      setId(curso._id)
      setNome(curso.nome)
      setProfessor(curso.professor)
      setCategoria(curso.categoria)
      setDescricao(curso.descricao)
      setNivel(curso.nivel)
    })()
  }, [])

  async function ativar(){
    try{
      const curso = route.params?.itens
      const id = curso._id;
      const nivel = curso.nivel;

      await api.put(`/cursos/${id}`, {
        _id: id,
        nome,
        nivel: 1,
      })

    }catch(err){
      Alert.alert(`Ops! Ocorreu um erro ${err}`);
    }
  }

  async function desativar(){
    try{
      const curso = route.params?.itens
      const id = curso._id

      await api.put(`/cursos/${id}`, {
        _id: id,
        nome,
        nivel: 0,
      })

    }catch(err){
      Alert.alert(`Ops! Ocorreu um erro ${err}`);
    }
  }

  async function atualizar(){
    try{
      const curso = route.params?.itens
      const id = curso._id
      console.log(id)

      const response = await api.put(`/cursos/${id}`, {
        _id: id,
        nome ,
        professor,
        categoria,
        descricao
      }).then((resp) => {
        Alert.alert(`${nome} atualizado com sucesso!`);
      })

    }catch(err){
      Alert.alert(`Ops! Ocorreu um erro ${err}`);
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
              onChangeText={(value)=> setNome(value)}
              value={nome}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Professor responsável"
              maxLength={25}
              autoCorrect={false}
              onChangeText={(value)=> setProfessor(value)}
              value={professor}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Categoria"
              maxLength={25}
              autoCorrect={false}
              onChangeText={(value)=> setCategoria(value)}
              value={categoria}
            />
  
            <TextInput 
              style={styles.input}
              placeholder="Descrição"
              maxLength={50}
              autoCorrect={false}
              onChangeText={(value)=> setDescricao(value)}
              value={descricao}
            />

            <TouchableOpacity 
              style={styles.btnLogin}
              onPress={statusCurso}
            >
              <Text style={styles.textBtnLogin}>Ativar/Desativar</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity 
              style={styles.btnLogin}
              onPress={atualizar}
            >
              <Text style={styles.textBtnLogin}>Atualizar Curso</Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
    </KeyboardAvoidingView>
  )
}
