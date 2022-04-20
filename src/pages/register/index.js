import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>

     
      <TouchableOpacity style={styles.addFotos}>
        <Ionicons name="md-person" size={62} color="#F82352" />
      </TouchableOpacity>
      <Text style={styles.textAddFoto}>Adicionar foto</Text>

      <View style={styles.imgBackground}>
        <ImageBackground  
          source={require('../../assets/img/bear.png')}
          style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center'}}  
        >
         
          <TextInput 
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={()=> {}}
          />

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

          <TouchableOpacity onPress={() => alert('Hello, world!')}>
            <Text style={styles.textBtn}>Voltar para o Login</Text>
          </TouchableOpacity>
           
        </ImageBackground>

      </View>
    </KeyboardAvoidingView>
  );
}


{/* <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/img/logo.png')}
          />
        </View>
        <View>
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
            passwordRules={true}
          />
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Cadastrar</Text>
          </TouchableOpacity>
        </View> */}