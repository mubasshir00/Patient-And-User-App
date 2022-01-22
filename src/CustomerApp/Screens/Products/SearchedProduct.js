import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Box,Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
var { width, height } = Dimensions.get('window')

const SearchedProduct = (props) => {
  const navigation = useNavigation()
  const { productsFiltered} = props
  return (
    <ScrollView mx="3" style={{ width: width / 1.2 }}>
      {
      productsFiltered.length > 0 ? (
        productsFiltered.map((item)=>(
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Product Details", { item: item })
          }} key={item._id * Math.random() + item.name}>
            <Box marginX="3" flexDirection="row">
              <Box marginX="5" marginY="1">
                <Image size={10}
                  borderRadius="100" alt={item.name} source={{ uri: item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }} />
              </Box>
              <Box>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </Box>
            </Box>
          </TouchableOpacity>
        ))
      ) : <Text>No Product Match</Text>
      }
    </ScrollView>
  );
};

export default SearchedProduct;

const styles = StyleSheet.create({});
