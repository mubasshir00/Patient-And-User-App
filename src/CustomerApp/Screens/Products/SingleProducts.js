import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Box, Container, Image,Text } from 'native-base';

const SingleProducts = (props) => {
  const [item,setItem] = useState(props.route.params.item)
  const [availability, setAvailability] = useState('')
  return (
    <Box style={styles.container}>
        <ScrollView style={{marginBottom:80,padding:5}}>
        <Box>
        <Image 
        source={{
        uri: item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
        }}
        resizeMode="contain"
        style={styles.image}
        alt={item.name}
        />
        </Box>
        <Box>
            <Text>{item.name}</Text>
        </Box>
        </ScrollView>
    </Box>
  );
};

export default SingleProducts;

const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:'100%'
    },
    imageContainer:{
        backgroundColor:'white',
        padding:0,
        margin:0
    },
    image:{
        width:'100%',
    }
});
