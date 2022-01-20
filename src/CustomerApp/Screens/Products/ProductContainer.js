import { Box, Input, Text,Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import ProductList from './ProductList'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import SearchedProduct from './SearchedProduct'
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter'

const data = require('../../assets/data/products.json')
const productsCategories = require('../../assets/data/categories.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories,setCategories] = useState([]);
    const [active,setActive] = useState()
    const [initialState,setInitialState] =  useState([]);
    const [productsCtg,setProductsCtg] = useState([])

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    //Categories 
    const changeCtg = (ctg) =>{
        {
            ctg === 'all' ? [setProductsCtg(initialState),setActive(true)] : [
                setProductsCtg(
                    products.filter((i)=>i.category._id===ctg),
                    setActive(true)
                )
            ]
        }
    }

    useEffect(() => {
        setProducts(data)
        setProductsFiltered(data)
        setFocus(false);
        setCategories(productsCategories)
        setActive(-1)
        setInitialState(data)

        return () =>{
            setProducts([])
            setProductsFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
        }
    }, [])

    const searchProduct = (text) =>{
        setProductsFiltered(
            products.filter((i)=>i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }


    return (
        <Box>
            <Center
                mx="3"
                w={{
                    base: "100%",
                    md: "25%",
                }}
                flexDirection="row"
            >
                <Input
                    mx="3"
                    placeholder="Search"
                    w={{
                        base: "85%",
                        md: "25%",
                    }}
                    backgroundColor="white"
                    borderRadius={5}
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                />

                {
                    focus == true ? (
                        <FontAweSome onPress={onBlur} name="close" size={30} />
                    ) : null
                }
            </Center>
            {
                focus == true ? (
                <SearchedProduct productsFiltered={productsFiltered}/>
                ) : (
            <ScrollView>
            <Box >
                <Banner/>
            </Box>
            <View>
              <CategoryFilter 
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            <View >
                <FlatList
                numColumns={2}
                data={products}
                renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                keyExtractor={item => item.name}
                />
                </View>
            </ScrollView >
                )
            }
        </Box>
    )
}

export default ProductContainer

const styles = StyleSheet.create({})
