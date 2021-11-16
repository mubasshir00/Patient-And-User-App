import { Box, Heading } from 'native-base';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import QuickSpecialistList from './QuickSpecialistList';

import { data } from '../assets/data/quickspecialistdata';
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('window');

const QuickSpecialist = () => {

    const navigation = useNavigation()

    const [specialists, setSpecialists] = useState([])
    
    useEffect(() => {
        setSpecialists(data)
        return () =>{
            setSpecialists([])
        }
    }, [])


    return (
        <Box>
            <Box py="2" style={styles.quickSpecialistTopHead} backgroundColor="info.100">
                <Heading fontSize={16} mx={2} my={1}>
                    Quick Specialist
                </Heading>
                <TouchableOpacity
                    onPress={() => navigation.navigate('All')}
                >
                    <Heading fontSize={16} mx={2} my={1}>View All</Heading>
                </TouchableOpacity>
            </Box>
            <Box alignItems="center" style={styles.listContainer}>
                {
                    specialists.map((item)=>{
                        return(
                            <QuickSpecialistList
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default QuickSpecialist

const styles = StyleSheet.create({
    quickSpecialistTopHead:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    listContainer:{
        height:height/4.7,
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
    },
})
