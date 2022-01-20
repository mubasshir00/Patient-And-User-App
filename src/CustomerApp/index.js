import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'

const CustomerApp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ProductContainer/>
        </SafeAreaView>
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
