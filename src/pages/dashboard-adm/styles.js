import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    item: {
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 25,
      borderRadius: 5,
    },
    title: {
      marginTop: 20,
      fontSize: 17,
      fontFamily: ''
    },
    addFotos: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    btnLista: {
        width: '100%',
        backgroundColor: '#F82352',
        borderRadius: 5,
        color: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    inputPesquisa: {
      width: '70%',
      marginTop: 50,
      height: 40,
      backgroundColor: '#363636',
      margin: 19,
      borderRadius: 20,
      fontSize: 19,
      paddingLeft: 15,
      paddingRight: 15,
      color: '#FFFFFF',
    },
    searchArea: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    orderButton: {
      marginRight: 30,
      top: 15,
      left: 25
    },
  });

export default styles