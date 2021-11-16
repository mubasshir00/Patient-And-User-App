import { Box ,Center,Heading,ScrollView,Text} from 'native-base'
import React from 'react'
import { StyleSheet , View } from 'react-native'
import { bloodPressureData} from '../../assets/data/MyVitals/MyVitalsData'
const BloodPressure = () => {
    return (
        <ScrollView background="blue.100">
            <Center
                pt="3"
            >
                <Heading>Blood Pressure</Heading>
            </Center>
            <Box>
                {
                    bloodPressureData.map((item) => {
                        const { id, date, time, systolic } = item
                        return (
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
                                            color="blue.400">{date}</Text>
                                    </Box>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >Time</Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                            color="blue.400"
                                        >{time}</Text>
                                    </Box>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >
                                            Systolic/Diastolic
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                            color="blue.400"
                                        >{systolic}</Text>
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

export default BloodPressure

const styles = StyleSheet.create({})
