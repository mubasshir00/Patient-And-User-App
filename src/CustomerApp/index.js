import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Main from './Navigators/Main'
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'

const CustomerApp = () => {
    return (
        <NavigationContainer>
            <Header/>
           <Main/>
        </NavigationContainer>
    )
}

export default CustomerApp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})
