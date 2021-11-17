import { Box, Container, Flex, Heading, Pressable, ScrollView } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { articlesData } from '../../assets/data/articlesData'
// console.log(articlesData);

const {width,height} = Dimensions.get('window')

const Articles = () => {
    return (
       <Box>
           <Heading mt={8} mb={3} ml={2} fontSize={16}>Articles</Heading>
               <ScrollView 
               horizontal={true}
               style={styles.articleContainer}
               >
                   {
                    articlesData.map((item,index)=>{
                           return(
                               <ImageBackground 
                               source={item.image} 
                               key={index}
                               resizeMode="cover"
                               blurRadius={3} 
                               >
                                   <TouchableOpacity style={styles.card} >
                                       <Heading fontSize={13}>{item.title}</Heading>
                                       <Text fontSize={10}>{item.text}</Text>
                                   </TouchableOpacity>
                              </ImageBackground>
                           )
                       })
                   }
            </ScrollView>
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
        borderRadius:100
    },
    articleContainer:{
        flexDirection:'row',
        // justifyContent:'space-between',
    }
})
