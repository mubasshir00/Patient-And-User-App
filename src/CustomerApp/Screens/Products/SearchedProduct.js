import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { Box } from 'native-base';

const SearchedProduct = (props) => {
  const { productsFiltered} = props
  return (
    <Box>
      {
      productsFiltered.length > 0 ? (
        productsFiltered.map((item)=>(
          <Box key={item._id*Math.random()+item.name}>
            <Box>
              <Image source={{ uri: item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'}}/>
            </Box>
            <Box>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </Box>
          </Box>
        ))
      ) : <Text>No Product Match</Text>
      }
    </Box>
  );
};

export default SearchedProduct;

const styles = StyleSheet.create({});
