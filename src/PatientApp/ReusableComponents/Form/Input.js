import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
    return (
        <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >

        </TextInput>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        width:200,
        backgroundColor:'white',
        margin:10,
        borderRadius:7,
        borderWidth:2,
        borderColor:'white',
        paddingHorizontal:10,
        paddingVertical:2,
    }
})
