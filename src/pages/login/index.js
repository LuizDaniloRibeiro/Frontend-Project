import React from 'react';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>

      <Image
        style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
        source={require('../../assets/img/logo.png')}
      />

      <View style={styles.imgBackground}>
        <ImageBackground  
          source={require('../../assets/img/bear.png')}
          style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center'}}  
        >

          <TextInput 
            style={styles.input}
            placeholder="E-mail/CPF"
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

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.textBtn}>Não possui o cadastro? Clique aqui para cadastrar</Text>
          </TouchableOpacity>
        
        </ImageBackground>

      </View>
    </KeyboardAvoidingView>
  );
}