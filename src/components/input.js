import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})

export default Input;