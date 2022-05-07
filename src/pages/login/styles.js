import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    imgBackground: {
    },
    containerLogo: {
        justifyContent: 'center',
        marginBottom: 50,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 20,
        padding: 10
    },
    btnGrup: {
        marginTop: 50,
    },
    btnLogin: {
        width: '90%',
        backgroundColor: '#F82352',
        marginBottom: 15,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textBtnLogin: {
        color: '#fff',
        fontSize: 18,
    },
    textBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 25,
        fontWeight: 'bold',
    },
    textCadastrar: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
    }
    
});

export default styles;