import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../color'
import ProductCard from './ProductCard'
var {width,height} = Dimensions.get('window')

const ProductList = (props) => {
    const {item} = props;
    const navigation = useNavigation()
    return (
    <TouchableOpacity style={{width:'50%'}}
    onPress={()=>
        navigation.navigate("Product Details",{item:item})
    }
    >
        <View style={{ width: width / 2, backgroundColor:colors.primaryColor}}>
            <ProductCard {...item}/>
        </View>
    </TouchableOpacity>
    )
}

export default ProductList

const styles = StyleSheet.create({})
