import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    imgBackground: {
        height: '75%'
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
        color: '#FFF',
        fontSize: 15,
        marginTop: 25,
        fontWeight: 'bold',
    },
    addFotos: {
        width: 120,
        height: 120,
        backgroundColor: '#FFF',
        borderRadius: 100,
        borderColor: '#000',
        borderWidth: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAddFoto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    }
});

export default styles;