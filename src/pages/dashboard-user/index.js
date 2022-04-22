import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';


export default function User({navigation}) {
  return (

        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView style={{backgroundColor: '#F82352', width: '100%', height: '20%', marginBottom: 45, alignItems: 'center', justifyContent: 'center'}}>
            <Image
                style={{alignItems: 'center', justifyContent: 'center', marginTop: 65}}
                source={require('../../assets/img/logo.png')}
            />
                <TouchableOpacity style={styles.addFotos}>
                    <Ionicons name="md-person" size={62} color="#F82352" />
                </TouchableOpacity>
            </SafeAreaView>

            <View style={styles.imgBackground}>
                <ImageBackground  
                    source={require('../../assets/img/bear.png')}
                    style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center', opacity: 0.9}}  
                >
            
            <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                editable={false}
            />

            <TextInput 
                style={styles.input}
                placeholder="CPF/CNPJ"
                editable={false}
                disable={true}
                autoCorrect={false}
                onChangeText={()=> {}}
            />


            <TextInput 
                style={styles.input}
                editable={false}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={()=> {}}
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

