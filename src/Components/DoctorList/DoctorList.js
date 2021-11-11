import { useNavigation } from '@react-navigation/native'
import { Box, Heading, Pressable } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

//DoctorList data comes from SpecialistScreen
const DoctorList = ({ 
    name, title, cost, rating, detailsAddress, patients, experience, time, timeZone, fee, speciality, registration, medicalExperience, schedule
}) => {

    const ratingAv = Math.round((5+rating-5)/11)

    const navigation = useNavigation()

    return (
        <Pressable 
        my="2" 
        borderRadius="2"
        onPress={()=>
            navigation.navigate("Details",{
                name:name,
                title:title,
                cost:cost,
                rating:rating, 
                detailsAddress :detailsAddress, 
                patients:patients, 
                experience:experience, 
                time:time, 
                timeZone:timeZone, 
                fee:fee, 
                speciality:speciality, 
                registration:registration, 
                medicalExperience:medicalExperience,
                schedule: schedule
            })
        }
        >
           {({isHovered,isFocused,isPressed})=>{
               return(
                   <Box 

                bg={isPressed ? "blue.100" : 
                isHovered ? "cyan.800" : "white"
                }
                p="2"

                style={{
                    transform:[
                        {
                            scale:isPressed ? 0.96 : 1,
                        }
                    ]
                }}

                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center">
                       <Box>
                           <Heading fontSize={15}>{name}</Heading>
                           <Text fontSize={13}>{title}</Text>
                       </Box>
                       <Box>
                           <Text>{cost} $</Text>
                           {/* <Text>{rating}</Text> */}
                           <Box flexDirection="row">
                               <Box flexDirection="row">
                                   {
                                       Array(ratingAv).fill().map((_, i) => (
                                           <Box key={i}>
                                               <Icon
                                                   name="star"
                                                   color="orange"
                                               />
                                           </Box>
                                       ))
                                   }
                               </Box>
                               <Box flexDirection="row">
                                   {
                                       Array(5 - ratingAv).fill().map((_, i) => (
                                           <Box key={i}>
                                               <Icon
                                                   name="staro"
                                               />
                                           </Box>
                                       ))
                                   }
                               </Box>
                           </Box>
                       </Box>
                   </Box>
               )
           }}
        </Pressable>
    )
}

export default DoctorList

const styles = StyleSheet.create({})
