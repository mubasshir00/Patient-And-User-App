import { Text } from 'native-base';
import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

var {width} = Dimensions.get("window");

const QuicSpecialistCard = (props) => {
    const {id,icon,image,title} = props
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image 
                source={image} 
                style={styles.imageContainer}
                resizeMode={'cover'}
                />
                <Text color="black" fontWeight="bold">{title}</Text>
            </View>
        </View>
    )
}

export default QuicSpecialistCard

const styles = StyleSheet.create({
    container:{
        // width:width/4-20,
        // height:width/6,
        paddingTop:7,
        paddingBottom:7,
        borderRadius:1,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        alignItems:'center',
        // elevation:8,
        backgroundColor:'white',
        justifyContent:'center'
    },
    card:{
        // height:width/4 - 20 -90,
        // width:width/2 - 20 -10
        alignItems:'center',
        justifyContent:'center'
    },
    imageContainer:{
        width:30,
        height:30,
    }
})
