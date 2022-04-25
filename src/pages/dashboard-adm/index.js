import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Image, Text, TouchableOpacity, Button } from "react-native";
import styles from './styles'
import GetUsuarios from '../../contexts/auth';

let lista = GetUsuarios;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nome: "Danilo Ribeiro",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    nome: "Gabriel Henrique",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    nome: "Kleber",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
  }
];

const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>

    <TouchableOpacity style={styles.addFotos}></TouchableOpacity>
    <Text style={[styles.title, textColor]}>{item.nome}</Text>
    
    <View style={styles.fixToText}>
        <TouchableOpacity 
            style={styles.btnLista}
            onPress={ () => navigation.navigate('Homer')}
        >
            <Text style={{color: '#FFF', fontSize: 17, fontStyle: 'italic'}}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLista}>
            <Text style={{color: '#FFF', fontSize: 17, fontStyle: 'italic'}}>Desativar</Text>
        </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Adm = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F82352" : "#BFBFBF";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: '#000', height: '20%', marginTop: -55, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/img/logo.png')}/>
      <Text style={{color: '#FFF', fontSize: 17}}>Lista de usuários</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onPress={(navigation)  => navigation}
        extraData={selectedId}
      />
      <View>
          {console.log(GetUsuarios)}
        </View>
    </SafeAreaView>
  );
};


export default Adm;