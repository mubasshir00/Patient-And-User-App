import { Box, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ProductList from './ProductList'
const data = require('../../assets/data/products.json')
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setProducts(data)
        return () =>{
            setProducts([])
        }
    }, [])

    return (
        <Box>
            <Text>Product Container</Text>
            <View style={{marginTop:100}}>
                <FlatList
                    
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList key={item.id} item={item}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        </Box>
    )
}

export default ProductContainer

const styles = StyleSheet.create({})
