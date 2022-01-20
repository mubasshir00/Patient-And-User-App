import { useNavigation } from '@react-navigation/native';
import { Box, Image, List, Pressable, ScrollView } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

var {width,height} = Dimensions.get('window')

const SearchDoctor = (props) => {

    const { doctorFiltered} = props

    const navigation = useNavigation();

    return (
        <ScrollView mx="3" style={{width:width/1.2}}>
           {
               doctorFiltered.length > 0 ? (
                   doctorFiltered.map((item)=>(
                     <Pressable 
                     key={item.id}
                     my="2.5"
                     borderRadius="2"
                     onPress={()=>
                         navigation.navigate('Details', {
                             name: item.name,
                             title: item.title,
                             image: item.image,
                             cost: item.cost,
                             rating: item.rating,
                             detailsAddress: item.detailsAddress,
                             patients: item.patients,
                             experience: item.experience,
                             time: item.time,
                             timeZone: item.timeZone,
                             fee: item.fee,
                             speciality: item.speciality,
                             registration: item.registration,
                             medicalExperience: item.medicalExperience,
                             schedule: item.schedule,
                         })
                    }
                     >
                         {({isHovered,isPressed,isFocused})=>{
                             return(
                                 <Box
                                     bg={isPressed ? 'blue.100' : isHovered ? 'cyan.800' : 'white'}
                                     px="2"
                                     py="3"
                                     style={{
                                         transform: [
                                             {
                                                 scale: isPressed ? 0.96 : 1,
                                             },
                                         ],
                                     }}
                                     flexDirection="row"
                                     alignItems="center"
                                     borderRadius="5"
                                 >
                                     <Box style={{ marginRight: 10 }}>
                                         <Image
                                             source={{
                                                 uri: item.image
                                             }}
                                             alt={item.name}
                                             size={10}
                                             borderRadius="100"
                                         />
                                     </Box>
                                     <Box>
                                         <Text>{item.name}</Text>
                                         <Text>{item.title}</Text>
                                     </Box>
                                 </Box>
                             )
                         }}
                     </Pressable>
                   ))
               ) :(
                   <Box>
                       <Text style={{alignSelf:'center'}}>No Doctors Match</Text>
                    </Box>
               )
           }
        </ScrollView>
    )
}

export default SearchDoctor

const styles = StyleSheet.create({})
