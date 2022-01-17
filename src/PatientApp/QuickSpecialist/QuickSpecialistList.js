import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Covid19Screen from '../SpecialistScreen/Covid19Screen';
import QuicSpecialistCard from './QuicSpecialistCard';
const {width} = Dimensions.get("window")
console.log(width);
const QuickSpecialistList = (props) => {
    const {item} = props ;
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={{marginBottom:5}}
        >
            <Box mx="1"  style={{width:width/4.5}}>
                <QuicSpecialistCard
                {...item}
                />
            </Box>
        </TouchableOpacity>
    )
}

export default QuickSpecialistList

const styles = StyleSheet.create({})
