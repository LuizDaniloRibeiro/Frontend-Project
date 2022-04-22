import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Alterar({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={{height: '20%', marginBottom: 45, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.addFotos}>
          <Ionicons name="md-person" size={62} color="#F82352"/>
        </TouchableOpacity>
        <Text style={styles.textAddFoto}>Atualizar foto</Text>
      </SafeAreaView>

      <View style={styles.imgBackground}>
        <ImageBackground  
          source={require('../../assets/img/bear.png')}
          style={{width: 400, height: 400, alignItems: 'center', justifyContent: 'center', opacity: 0.9}}  
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
        </ImageBackground>

        <View style={styles.container}>
          <TouchableOpacity 
              style={styles.btnLogin}
              onPress={ () => navigation.navigate('Editar')}
          >
              <Text style={styles.textBtnLogin}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
