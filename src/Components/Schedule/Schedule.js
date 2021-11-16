import { useNavigation } from '@react-navigation/native'
import { Box, Heading, ScrollView, Text, Pressable, Center} from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ProfileCard from '../../ReusableComponents/ProfileCard/ProfileCard'
import Calender from './Calender'

//props come from SingleSpecialist file
const Schedule = (props) => {
    const [specialist, setSpecialist] = useState(props.route.params)
    const { name, title, rating, schedule} = specialist
    // console.log(schedule.Evening);
    const navigation = useNavigation()
    return (
        <ScrollView background="white">
            <Box background="blue.100" px="2" py="2.5" m="4">
                <ProfileCard/>
            </Box>
            <Calender/>
            <Box 
                px="4"
            >
                <Heading>Morning</Heading>
                <Box>
                    <Box 
                    flexDirection="row"
                    justifyContent="space-between"
                        my="1"
                    >
                        {
                            schedule.Morning.slice(3).map((item) => {
                                return (
                                    <Pressable
                                    key={item.id}
                                    borderColor="black" borderWidth="1"
                                    alignItems="center"
                                    borderRadius="10"
                                    px="4"
                                    py="1.5"
                                    >
                                        <Text fontSize="15">{item.morningTime}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </Box>
                    <Box 
                    flexDirection="row"
                    justifyContent="space-between"
                    my="1"
                    >
                        {
                            schedule.Morning.slice(-3).map((item) => {
                                return (
                                    <Pressable 
                                    key={item.id} 
                                        borderColor="black" borderWidth="1"
                                        alignItems="center"
                                        borderRadius="10"
                                        px="4"
                                        py="1.5"
                                    >
                                        <Text>{item.morningTime}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            <Box
                px="4"
            >
                <Heading>Evening</Heading>
                <Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        my="1"
                    >
                        {
                            schedule.Evening.slice(3).map((item) => {
                                return (
                                    <Box 
                                    key={item.id}
                                        borderColor="black" borderWidth="1"
                                        alignItems="center"
                                        borderRadius="10"
                                        px="4"
                                        py="1.5"
                                    >
                                        <Text>{item.eveningTime}</Text>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                       my="1"
                    >
                        {
                            schedule.Evening.slice(-3).map((item) => {
                                return (
                                    <Box 
                                    key={item.id}
                                        borderColor="black" borderWidth="1"
                                        alignItems="center"
                                        borderRadius="10"
                                        px="4"
                                        py="1.5"
                                    >
                                        <Text>{item.eveningTime}</Text>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            <Pressable
            //navigation to summery screen
            onPress={()=>{
                navigation.navigate('Summery')
            }}
            >
            {({isHovered,isFocused,isPressed})=>{
                return(
                    <Box
                    bg={isPressed ? "blue.400" : isHovered ? "blue.300" : "blue.500"}
                    py="2"
                    mx="4"
                    my="2"
                    rounded="8"
                    style={{
                        transform:[
                            {
                                scale:isPressed ? 0.95:1,
                            }
                        ]
                    }}
                    
                    >
                        <Center>
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="16"
                            >Confirm</Text>
                        </Center>
                    </Box>
                )
            }}
            </Pressable>
        </ScrollView>
    )
}

export default Schedule

const styles = StyleSheet.create({})
