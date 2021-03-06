import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
const {width} = Dimensions.get('window')
const ProductCard = (props) => {
    const {name,price,image,countInStock} = props;
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image ? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'}} resizeMode="contain"/>
            <View style={styles.card}/>
            <Text style={styles.title}>
            {
            name.length>15 ? name.substring(0,15 - 3) + '...' : name
            }
            </Text>
            <Text style={styles.price}>${price}</Text>
            {countInStock>0 ?(
                <View style={{marginBottom:60}}>
                    <TouchableOpacity>
                        <Text>Add To Cart</Text>
                    </TouchableOpacity>
                </View>) : <Text style={{marginTop:20}}>Current Unavailable</Text>
            }
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:width/2 -20,
        height:width/1.6,
        padding:10,
        borderRadius:10,
        marginTop:25,
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
        top:-5
    },
    card:{
        marginBottom:1,
        height:width/2 - 20 -30,
        backgroundColor:'transparent',
        width:width/2,
    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center'
    },
    price:{
        fontSize:20,
        color:'orange',
        marginTop:10,
    }
})
