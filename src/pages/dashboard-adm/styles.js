import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
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
        backgroundColor: '#F3613A',
        borderRadius: 2,
        color: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }
  });

export default styles