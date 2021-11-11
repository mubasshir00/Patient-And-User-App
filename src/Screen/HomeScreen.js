import { useNavigation } from '@react-navigation/native'
import { Center, Container,Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Articles from '../Home/Articles/Articles'
import Category from '../Home/Category/Category'
import HeroContent from '../Home/HeroContent/HeroContent'
import QuickSpecialist from '../QuickSpecialist/QuickSpecialist'

const HomeScreen = () => {
    useNavigation
    return (
        <Box backgroundColor="info.100">
            <ScrollView>
                <View style={{backgroundColor:'white'}}>
                    <Center>
                        <Heading fontSize={29}>BDEMR</Heading>
                    </Center>
                </View>
                <HeroContent/>
                <Box>
                    <Category />
                    <QuickSpecialist />
                    <Articles />
                </Box>
           </ScrollView>
        </Box>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
