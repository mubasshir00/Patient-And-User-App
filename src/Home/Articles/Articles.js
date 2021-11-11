import { Box, Container, Flex, Heading, Pressable } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
const data = require('../../assets/data/articles.json');
// console.log(data);

const {width,height} = Dimensions.get('window')

const Articles = () => {
    return (
       <Box>
           <Heading mt={4} ml={2} mb={2} fontSize={16}>Articles</Heading>
               <View style={styles.articleContainer}>
                   {
                       data.slice(0,3).map((item,index)=>{
                           return(
                               <ImageBackground 
                               source={{uri:item.image}} 
                               key={index}
                               resizeMode="cover"
                               blurRadius={6}
                               >
                                   <TouchableOpacity style={styles.card} >
                                       <Heading fontSize={12}>{item.title}</Heading>
                                       <Text>{item.text}</Text>
                                   </TouchableOpacity>
                              </ImageBackground>
                           )
                       })
                   }
               </View>
       </Box>
    )
}

export default Articles

const styles = StyleSheet.create({
    card:{
        backgroundColor:'transparent',
        padding:10,
        width:width/3.3,
        margin:4,
        color:'black',
    },
    articleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})
