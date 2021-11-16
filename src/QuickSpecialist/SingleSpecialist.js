import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Flex, Spacer, Center, Text, Accordion, Image } from 'native-base'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import FontAweSome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

//here props come from DoctorList 
const SingleSpecialist = (props) => {
    const [specialist, setSpecialist] = useState(props.route.params)
    const { name, title, cost, rating, detailsAddress, patients, experience, time, timeZone, fee, speciality, registration, medicalExperience, schedule } = specialist
    
    const navigation = useNavigation()

    return (
        <Box
            style={styles.container}
            backgroundColor="white"
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
                        <Heading fontSize={18}>{name}</Heading>
                        <Text>{title}</Text>
                        <Text marginTop="2" fontSize="15" color="gray.500" fontWeight="bold">{detailsAddress}</Text>
                    </Flex>
                    <Spacer />
                    <Box flexDirection="row">
                        <Box mx="1" 
                        background="blue.600"
                        px="3"
                        py="2" 
                        borderRadius="100"
                        >
                            <FontAweSome color="white" name="phone" size={25} />
                        </Box>
                        <Box mx="1"
                            background="blue.600"
                            px="2"
                            py="2"
                            borderRadius="100"
                        >
                            <FontAweSome color="white" name="video-camera" size={25} />
                        </Box>
                        <Box mx="1"
                            background="blue.600"
                            px="2"
                            py="2"
                            borderRadius="100"
                        >
                            <Entypo color="white" name="message" size={25} />
                        </Box>
                    </Box>
                </Box>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    px={3}
                    py={2}
                >
                    <Box
                        backgroundColor="blue.100"
                        padding="2"
                        alignItems="center"
                        width={width / 4}
                        borderRadius="10"
                    >
                        <Text 
                        fontWeight="bold"
                        color="blue.500"
                        >PATIENTS</Text>
                        <Text style={[styles.fontColor]}>{patients}+</Text>
                    </Box>
                    <Box
                        backgroundColor="blue.100"
                        padding="2"
                        alignItems="center"
                        width={width / 4}
                        borderRadius="10"
                    >
                        <Text 
                        fontWeight="bold"
                        color="blue.500"
                        >RATINGS</Text>
                        <Text style={[styles.fontColor]}>{rating}</Text>
                    </Box>
                    <Box
                        backgroundColor="blue.100"
                        py="2"
                        alignItems="center"
                        width={width / 3.7}
                        borderRadius="10"
                    >
                        <Text 
                            fontWeight="bold"
                            color="blue.500"
                        >EXPERIENCE</Text>
                        <Text style={[styles.fontColor]}>{experience} Years</Text>
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
                        backgroundColor="blue.100"
                        px="1" py="1.5"
                    >
                        <Text color="black" fontWeight="bold">Next Available Slot : <Text color="blue.400" fontWeight="bold">{time}</Text> <Text color="blue.400" fontWeight="bold">{timeZone}</Text> Today </Text>
                    </Box>
                    <Box
                        backgroundColor="blue.100"
                        px="1.5" py="1.5"
                    >
                        <Text color="black" fontWeight="bold">Fee : <Text color="blue.400" fontWeight="bold">{cost}$</Text> </Text>
                    </Box>
                </Box>
                <Box
                    backgroundColor="gray.100"
                    my="2"
                    px={3}
                >
                    <Accordion allowMultiple>
                        <Accordion.Item>
                            <Accordion.Summary backgroundColor="white">
                                <Text fontSize={18} fontWeight="bold">More Info</Text>
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
