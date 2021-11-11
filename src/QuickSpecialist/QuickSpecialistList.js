import { useNavigation } from '@react-navigation/native';
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
        >
            <View style={{width:width/4}}>
                <QuicSpecialistCard
                {...item}
                />
            </View>
        </TouchableOpacity>
    )
}

export default QuickSpecialistList

const styles = StyleSheet.create({})
