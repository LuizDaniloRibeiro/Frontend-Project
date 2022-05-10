import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    imgBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerLogo: {
        justifyContent: 'center',
        marginBottom: 50,
    },
    input: {
        height: 50,
        width: '90%',
        paddingLeft: 60,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginBottom: 15,
        color: '#000',
        fontSize: 20,
        borderRadius: 8,
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
        borderRadius: 8,
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
    },
    icon: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconEmail: {
        position: 'absolute',
        left: 40, 
        top: 10
    },
    iconPassword: {
        position: 'absolute',
        left: 40, 
        top: 10
    }
    
});

export default styles;