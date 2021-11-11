import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Flex, Spacer, Center, Text, Accordion, Image } from 'native-base'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get('window')

//here props come from DoctorList 
const SingleSpecialist = (props) => {
    const [specialist, setSpecialist] = useState(props.route.params)
    // console.log('SingleSpecialist',specialist);
    const { name, title, cost, rating, detailsAddress, patients, experience, time, timeZone, fee, speciality, registration, medicalExperience, schedule } = specialist
    
    const navigation = useNavigation()

    return (
        <Box
            style={styles.container}
            backgroundColor="white"
            pt={1}
            pb={2}
        >
            <ScrollView >
                <Image
                    source={require('../assets/images/doctor.jpg')}
                    // size="2xl"
                    resizeMode="cover"
                    alt="image"
                    height={height / 4.3}
                />
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    py={3}
                    px={3}
                >
                    <Flex
                    >
                        <Heading fontSize={15}>{name}</Heading>
                        <Text style={[styles.fontColor]}>{title}</Text>
                        <Text style={[styles.fontColor]}>{detailsAddress}</Text>
                    </Flex>
                    <Spacer />
                    <Box>
                        ABCD
                    </Box>
                </Box>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    px={3}
                >
                    <Box
                        backgroundColor="gray.200"
                        padding="2"
                        alignItems="center"
                        width={width / 4}

                    >
                        <Text style={[styles.fontSizeBoxHead]}>PATIENTS</Text>
                        <Text style={[styles.fontColor]}>{patients}+</Text>
                    </Box>
                    <Box
                        backgroundColor="gray.200"
                        padding="2"
                        alignItems="center"
                        width={width / 4}
                    >
                        <Text style={[styles.fontSizeBoxHead]}>RATINGS</Text>
                        <Text style={[styles.fontColor]}>{rating}</Text>
                    </Box>
                    <Box
                        backgroundColor="gray.200"
                        py="2"
                        alignItems="center"
                        width={width / 3.7}
                    >
                        <Text style={[styles.fontSizeBoxHead]}>EXPERIENCE</Text>
                        <Text style={[styles.fontColor]}>{experience}</Text>
                    </Box>
                </Box>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={3}
                    my="3"
                >
                    <Box
                        backgroundColor="gray.200"
                        p="1"
                    >
                        <Text color="black" fontWeight="bold">Next Available Slot : <Text color="blue.400" fontWeight="bold">{time}</Text> <Text color="blue.400" fontWeight="bold">{timeZone}</Text> Today </Text>
                    </Box>
                    <Box
                        backgroundColor="gray.200"
                        p="1"
                    >
                        <Text color="black" fontWeight="bold">Fee : <Text color="blue.400" fontWeight="bold">{cost}$</Text> </Text>
                    </Box>
                </Box>
                <Box
                    backgroundColor="gray.100"
                    mt="2"
                    px={3}
                >
                    <Accordion allowMultiple>
                        <Accordion.Item>
                            <Accordion.Summary backgroundColor="blue.500">
                                More Info
                                <Accordion.Icon />
                            </Accordion.Summary>
                            <Accordion.Details>
                                <Box>
                                    <Box py="2">
                                        <Text fontSize="12">Speciality</Text>
                                        <Text color="black" fontSize="17" fontWeight="bold">{speciality}</Text>
                                    </Box>
                                    <Box py="2">
                                        <Text fontSize="12">Registration No</Text>
                                        <Text color="black" fontSize="17" fontWeight="bold">{registration}</Text>
                                    </Box>
                                    <Box py="2">
                                        <Text fontSize="12">Medical Experience</Text>
                                        <Text color="black" fontSize="17" fontWeight="bold">{experience} Years</Text>
                                    </Box>
                                </Box>
                            </Accordion.Details>
                        </Accordion.Item>
                    </Accordion>
                </Box>
            </ScrollView>
            <TouchableOpacity 
            onPress={()=>
                navigation.navigate('Schedule',{
                    name:name,
                    title:title,
                    rating:rating,
                    schedule: schedule
                })
            }
            >
                <Center background="blue.500" mx="3" py="2">
                    <Text color="white" fontWeight="bold">Book Appointment</Text>
                </Center>
            </TouchableOpacity>
        </Box>
    )
}

export default SingleSpecialist

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    fontColor: {
        color: 'black',
        fontWeight: 'bold'
    },
    fontSizeBoxHead: {
        fontSize: 11
    }
})
