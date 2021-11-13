import { Box ,Center,Heading,ScrollView,Text} from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { bmi } from '../../assets/data/MyVitals/MyVitalsData'

const BMI = () => {
    return (
        <ScrollView background="blue.100">
            <Center
            pt="3"
            ><Heading>BMI Report</Heading></Center>
            <Box>
                {
                    bmi.map((item)=>{
                        const {id,date,height,wieght,BMI} = item
                        return(
                            <Box 
                            key={id}
                            flexDirection="row"
                            justifyContent="space-between"
                            background="white"
                            my="3"
                            py="2"
                            px="4"
                            mx='4'
                            >
                                <Center>
                                    <Box>
                                        <Text
                                        fontWeight="bold"
                                        >Date</Text>
                                    </Box>
                                    <Box>
                                        <Text
                                        fontWeight="bold"
                                        color="blue.500">{date}</Text>
                                    </Box>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >Height</Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                            color="blue.500"
                                        >{height}</Text>
                                    </Box>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >Weight</Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                            color="blue.500"
                                        >{wieght}</Text>
                                    </Box>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >BMI</Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                            color="blue.500"
                                        >{BMI}</Text>
                                    </Box>
                                </Center>
                            </Box>
                        )
                    })
                }
            </Box>
        </ScrollView>
    )
}

export default BMI

const styles = StyleSheet.create({})
