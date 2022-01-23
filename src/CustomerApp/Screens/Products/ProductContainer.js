import { Box, Input, Text,Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import ProductList from './ProductList'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import SearchedProduct from './SearchedProduct'
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter'

const data = require('../../assets/data/products.json')
const productsCategories = require('../../assets/data/categories.json')

const {height} = Dimensions.get('window')

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
        setProductsCtg(data)

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
            <Box 
                w={{
                    base: "100%",
                    md: "25%",
                }}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Input
                    mx="3"
                    placeholder="Search"
                    w={{
                        base: "100%",
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
            </Box>
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
            {
            productsCtg.length>0 ? (
            <View style={styles.listContainer}>
            {
            productsCtg.map((item)=>{
                return(
                <ProductList
                key={item._id} item={item}/>
                )
            })
            }
            </View>
            ) : <View style={[styles.center,{height:height/2}]}>
                <Text>
                    No Product Found
                </Text>
            </View>
            }
                {/* <FlatList
                numColumns={2}
                data={products}
                renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                keyExtractor={item => item.name}
                /> */}
            </ScrollView >
                )
            }
        </Box>
    )
}

export default ProductContainer

const styles = StyleSheet.create({
    container:{
        flexWrap:'wrap'
    },
    listContainer:{
        height:height,
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
})
