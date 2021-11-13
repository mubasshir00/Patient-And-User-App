import { Box,Center,Image,ScrollView,Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { myVitalData } from '../../../assets/data/Profile/MyVitalsData'

import PressableComponent from '../../../ReusableComponents/PressableComponents/PressableComponent'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const MyVitals = () => {
    const navigation = useNavigation()
    return (
        <ScrollView backgroundColor="blue.100">
            <Center my="4">
                <Box>
                    <Text fontSize="18"
                    color="gray.500"
                    fontWeight="bold"
                    >Check your</Text>
                </Box>
                <Box>
                    <Text 
                    fontSize="24"
                    fontWeight="bold"
                    color="black"
                    >Vitals 
                        <Text color="blue.700"> Report</Text>
                    </Text>
                </Box>
            </Center>
            {
                myVitalData.map((item)=>{
                    const {id,image,title} =item
                    return(
                        <PressableComponent key={id} 
                        mx="4" px="4" 
                        py="2" my="2"
                        bgPressed="white"
                        navigationName={title}
                        >
                            <Box 
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            >
                                <Image
                                    source={image} alt="blood Test"
                                    style={styles.imageIcon}
                                />
                                <Box>
                                    <Text fontSize="16" fontWeight="bold">{title}</Text>
                                </Box>
                                <FontAwesomeIcon name="arrow-right" size={25} color="#5FAAFF"/>
                            </Box>

                        </PressableComponent>
                    )
                })
            }
        </ScrollView>
    )
}

export default MyVitals

const styles = StyleSheet.create({
    imageIcon :{
        width:40,
        height:40
    }
})
