import { Box, ScrollView } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { appointmentData } from '../../assets/data/Appointment/AppointmentData'
import ActiveAppointment from '../Components/Appointment/ActiveAppointment'
import PostAppointment from '../Components/Appointment/PostAppointment'

const AppointmentScreen = () => {
    const activeApointment = appointmentData.filter((item)=> item.active===true)
    const postAppointment = appointmentData.filter((item)=>item.active===false)
    return (
        <Box backgroundColor="" flex={1}>
            <ScrollView>
                <ActiveAppointment activeApointment={activeApointment} />
                <PostAppointment postAppointment={postAppointment} />
            </ScrollView>
        </Box>
    )
}

export default AppointmentScreen

const styles = StyleSheet.create({})
