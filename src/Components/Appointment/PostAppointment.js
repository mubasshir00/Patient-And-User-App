import { Accordion, Box,Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PostAppointmentCard from './PostAppointmentCard'

const PostAppointment = ({ postAppointment}) => {
    return (
        <Box p={3}>
            <Accordion allowMultiple>
                <Accordion.Item>
                    <Accordion.Summary background="white"
                    
                    >
                        <Text 
                        fontWeight="bold" fontSize="16"
                        fontFamily="Poppins-Regular"
                        >Post Appointment</Text>
                    <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        <PostAppointmentCard postAppointment={postAppointment}/>
                    </Accordion.Details>
                </Accordion.Item>
            </Accordion>
        </Box>
    )
}

export default PostAppointment

const styles = StyleSheet.create({})
