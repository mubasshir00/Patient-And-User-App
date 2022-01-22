import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductContainer from '../Screens/Products/ProductContainer';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProducts from '../Screens/Products/SingleProducts';

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={ProductContainer}
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen 
        name="Product Details"
        component={SingleProducts}
        options={{
          headerShown: false
        }}
        />
    </Stack.Navigator>
  );
};

export default function HomeNavigator(){
    return <MyStack/>
};

const styles = StyleSheet.create({});
