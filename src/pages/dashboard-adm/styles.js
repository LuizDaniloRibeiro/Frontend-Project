import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#fff',
    },
    item: {
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 20,
      fontSize: 32,
    },
    addFotos: {
        width: 120,
        height: 120,
        backgroundColor: '#FFF',
        borderRadius: 100,
        marginRight: 10,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    btnLista: {
        width: 100,
        backgroundColor: '#F3613A',
        borderRadius: 2,
        color: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
  });

export default styles