import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'
import { Box, Center,Text } from 'native-base'
const Calender = () => {

    const [selectedStartDate, setSelectedStartDate] = useState('')

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    console.log(startDate);

    const onDateChange = (date) =>{
        setSelectedStartDate(date)
    }

    return (
        <Box>
            <CalendarPicker
            onDateChange={onDateChange}
            />
            <Box>
                <Center>
                    <Text color="blue.800">{startDate}</Text>
                </Center>
            </Box>
        </Box>
    )
}

export default Calender

const styles = StyleSheet.create({})
