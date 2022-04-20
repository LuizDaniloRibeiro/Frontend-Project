import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';


export default function User({navigation}) {
  return (

        <KeyboardAvoidingView style={styles.container}>

        <Image
            style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
            source={require('../../assets/img/logo.png')}
        />
        
        <TouchableOpacity style={styles.addFotos}>
            <Ionicons name="md-person" size={62} color="#F82352" />
        </TouchableOpacity>
        <Text style={styles.textAddFoto}>Nome</Text>

        <View style={styles.imgBackground}>
            <ImageBackground  
            source={require('../../assets/img/bear.png')}
            style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center'}}  
            >
            
            <TextInput 
                style={styles.input}
                placeholder="CPF/CNPJ"
                autoCorrect={false}
                onChangeText={()=> {}}
            />

            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={()=> {}}
            />

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=> {}}
                secureTextEntry={true}
                password={true} 
            />

            <TouchableOpacity 
                style={styles.btnLogin}
                onPress={ () => navigation.navigate('Editar')}
            >
                <Text style={styles.textBtnLogin}>Editar</Text>
            </TouchableOpacity>

            </ImageBackground>

        </View>
        </KeyboardAvoidingView>
  );
}

