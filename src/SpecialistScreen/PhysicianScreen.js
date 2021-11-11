import { Box,Center,FlatList,Input } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import DoctorList from '../Components/DoctorList/DoctorList';
const data = require('../assets/data/DoctorList/physician.json');

const {width,height} = Dimensions.get('window')

const PhysicianScreen = () => {
    return (
       <Box backgroundColor="info.100" flex={1} >
            <Center mt="4">
                <Input
                    mx="3"
                    placeholder="Search"
                    w={{
                        base: "85%",
                        md: "25%",
                    }}
                    backgroundColor="white"
                    borderRadius={5}
                />
                <FlatList
                data={data}
                renderItem={({item})=>(
                    <DoctorList
                      {...item}
                    />
                )}
                w={{
                    base:"85%",
                    md:"25%",
                }}
                mt="2"
                />
            </Center>
       </Box>
    )
}

export default PhysicianScreen

const styles = StyleSheet.create({})
