import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Box,Text } from 'native-base';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text fontSize="25" fontWeight="bold">BDEMR</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
    header:{
        width:"100%",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
        padding:10,
        marginTop:80,
    }
});
