import React from 'react'
import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
const {width} = Dimensions.get('window')
const ProductCard = (props) => {
    const {name,price,image,countInStock} = props;
    return (
        <View style={styles.container}>
            <Image/>
            <View/>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:width/2 -20,
        height:width/1.7,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8
    },
    image:{
        width:width/2 -20 -10,
        height:width/2 -20 -30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45
    },
    card:{
        marginBottom:10,
        height:width/2 - 20 -30,
        backgroundColor:'transparent',
        width:width/2,
    }
})
