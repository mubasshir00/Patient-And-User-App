import { Accordion, Box } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostAppointmentCard from './PostAppointmentCard'

const PostAppointment = ({ postAppointment}) => {
    return (
        <Box p={3}>
            <Accordion allowMultiple>
                <Accordion.Item>
                    <Accordion.Summary background="white">
                        Post Appointment
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
