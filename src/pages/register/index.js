import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

export default function Register() {
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
            placeholder="Nome completo"
            autoCorrect={false}
            onChangeText={()=> {}}
          />

          <TextInput 
            style={styles.input}
            placeholder="CPF"
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

          <TextInput 
            style={styles.input}
            placeholder="Confirmar senha"
            autoCorrect={false}
            onChangeText={()=> {}}
            secureTextEntry={true}
            password={true} 
          />

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Cadastrar</Text>
          </TouchableOpacity>           
        </ImageBackground>

      </View>
    </KeyboardAvoidingView>
  );
}
