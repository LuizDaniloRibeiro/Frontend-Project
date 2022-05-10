import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View, Image, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import api from "../../services/api";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>

    <TouchableOpacity style={styles.addFotos}>
      <Image
      //<Image source={{ uri: data.avatar }} style={style.itemPhoto}/>
        style={{width: '100%', height: '100%', borderRadius: 5}}
        source={require('../../assets/img/curso-ti2.jpg')}
      />
    </TouchableOpacity>
    <Text style={[styles.title, textColor]}>{item.nome}</Text>
    <Text style={[styles.title, textColor]}>{item.professor}</Text>
    <Text style={[styles.title, textColor]}>{item.categoria}</Text>
    <Text style={[styles.title, textColor]}>{item.descricao}</Text>
    
    <View style={styles.fixToText}>

        <TouchableOpacity 
            style={styles.btnLista}
            onPress={() => {navigation.navigate('Editar', {itens: item})}}
        >
            <Text style={{color: '#FFF', fontSize: 20}}>EDITAR CURSO</Text>
        </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Adm = ({navigation, route}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [cursos,setCursos]=useState([]); 
  const [pesquisarText, setPesquisar] = useState('');
  
  useEffect
    (async() => {
      await api.get('/cursos').then((resp) => {
        setCursos(resp.data);
      });
  },[])


  useEffect(async() => {
    if(pesquisarText === ''){
      await api.get('/cursos').then((resp) => {
        setCursos(resp.data)
      })
    }else{
      setCursos(
        cursos.filter(
          (item) => 
            item.nome.toLowerCase().indexOf(pesquisarText.toLowerCase()) > -1
        )
      );
    }
  },[pesquisarText]);

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? "#212529" : "#212529";
    const color = item._id === selectedId ? 'white' : 'white';

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item._id) }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar por nome do curso"
          placeholderTextColor="#888"
          value={pesquisarText}
          onChangeText={(t) => setPesquisar(t)}
        />
       
        <TouchableOpacity 
          style={styles.orderButton}
          onPress={() => {navigation.navigate('Login')}}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={cursos}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};


export default Adm;