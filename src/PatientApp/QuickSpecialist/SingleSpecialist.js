import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Flex, Spacer, Center, Text, Accordion, Image } from 'native-base'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import FontAweSome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { connect } from 'react-redux'
import * as actions from '../Redux/Actions/bookActions'

const { width, height } = Dimensions.get('window')


const ratingAv = 4

//here props come from DoctorList 
const SingleSpecialist = (props) => {
    const [specialist, setSpecialist] = useState(props.route.params)
    
    const { name, title, image, cost, rating, detailsAddress, patients, experience, time, timeZone, fee, speciality, registration, medicalExperience, schedule } = specialist
    
    const navigation = useNavigation()

    const onPressDataPassing = () =>{
        props.addDoctorToBook(specialist)

        // props.addDoctorToBook({ ...specialist, 'xxx': 'sss' })
    }

    const navigationToNextPage = () =>{
        navigation.navigate('Schedule', {
            name: name,
            title: title,
            rating: rating,
            schedule: schedule
        })
    }

    const combineFunction = () =>{
        navigationToNextPage()
        onPressDataPassing()
    }

    return (
        <Box
            style={styles.container}
            backgroundColor="white"
            pb={2}
        >
            <ScrollView >
                <Image
                    source={{uri:image}}
                    // size="2xl"
                    resizeMode="contain"
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
                        <Heading fontSize={18}>Dr {name}</Heading>
                        <Text ml="4" fontSize="12">{title}</Text>
                        <Box marginTop="2" flexDirection="row" alignItems="center">
                            <Ionicons name="location" size={20} color="#5099F3"/>
                            <Text fontSize="13" color="gray.500" fontWeight="bold">{detailsAddress}</Text>
                        </Box>
                    </Flex>
                    <Spacer />
                    <Box flexDirection="row">
                        <Box mx="1" 
                        background="#5099F3"
                        px="3"
                        py="2" 
                        borderRadius="100"
                        >
                            <FontAweSome color="white" name="phone" size={25} />
                        </Box>
                        <Box mx="1"
                            background="#5099F3"
                            px="2"
                            py="2"
                            borderRadius="100"
                        >
                            <FontAweSome color="white" name="video-camera" size={25} />
                        </Box>
                        <Box mx="1"
                            background="#5099F3"
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
                        backgroundColor="#F0F4F7"
                        padding="2"
                        alignItems="center"
                        width={width / 3.7}
                        borderRadius="10"
                    >
                        <Text 
                        fontWeight="bold"
                        color="grey"
                        fontSize="11"
                        >PATIENTS</Text>
                        <Text fontSize="19" style={[styles.fontColor]}>{patients}+</Text>
                    </Box>
                    <Box
                        backgroundColor="#F0F4F7"
                        padding="2"
                        alignItems="center"
                        width={width / 3.7}
                        borderRadius="10"
                    >
                        <Text 
                            fontWeight="bold"
                            color="grey"
                            fontSize="11"
                            pb="2"
                        >RATINGS</Text>

                       <Box>

                            <Box flexDirection="row">

                                <Box flexDirection="row">
                                    {
                                        Array(ratingAv).fill().map((_, i) => (
                                            <Box key={i}>
                                                <AntDesign
                                                    name="star"
                                                    color="orange"
                                                    size={13}
                                                />
                                            </Box>
                                        ))
                                    }
                                </Box>

                                <Box flexDirection="row">
                                    {
                                        Array(5 - ratingAv).fill().map((_, i) => (
                                            <Box key={i}>
                                                <AntDesign
                                                    name="staro"
                                                    size={13}
                                                />
                                            </Box>
                                        ))
                                    }
                                </Box>

                            </Box>

                        </Box>

                        {/* <Text fontSize="19" style={[styles.fontColor]}>{rating}</Text> */}
                    </Box>
                    <Box
                        backgroundColor="#F0F4F7"
                        py="2"
                        alignItems="center"
                        width={width / 3.7}
                        borderRadius="10"
                    >
                        <Text 
                            fontWeight="bold"
                            color="grey"
                            fontSize="11"
                        >EXPERIENCE</Text>
                        <Text fontSize="19" style={[styles.fontColor]}>{experience} Years</Text>
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
                        backgroundColor="#F0F4F7"
                        px="1" py="1.5"
                    >
                        <Text color="black" >Next Available Slot : <Text color="#5099F3" fontWeight="bold"
                        fontSize="18"
                        >{time}</Text> 
                        <Text fontSize="18" color="#5099F3" fontWeight="bold">{timeZone}</Text> Today </Text>
                    </Box>
                    <Box
                        backgroundColor="#F0F4F7"
                        px="1" py="1.5"
                        alignItems="center"
                    >
                        <Text color="black" >Fee : <Text color="#5099F3" fontWeight="bold" fontSize="18">{cost}$</Text> </Text>
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
                    combineFunction()
            }
            >
                <Center background="#5099F3" mx="3" py="2">
                    <Text color="white" fontWeight="bold">Book Appointment</Text>
                </Center>
            </TouchableOpacity>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addDoctorToBook : (doctor) => 
            dispatch(actions.addToBook({testData :4, doctor}))
    }
}

export default connect(null, mapDispatchToProps)(SingleSpecialist)

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
