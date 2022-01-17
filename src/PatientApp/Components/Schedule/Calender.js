import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'
import { Box, Center, Text } from 'native-base'
const Calender = (props) => {
    console.log(props);
    const [selectedStartDate, setSelectedStartDate] = useState('')

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const { day, month,year } = { ...selectedStartDate._i }

    console.log(startDate);

    const onDateChange = (date) => {
        setSelectedStartDate(date)
    }

    let monthName = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
    return (
        <Box>
            <CalendarPicker
                onDateChange={onDateChange}
            />
            <Box>
                <Center flexDirection="column">
                    <Box flexDirection="row">
                        <Text color="blue.800" >{day} - </Text>
                        <Text color="blue.800" >{monthName[month + 1]} - </Text>
                        <Text color="blue.800">{year} </Text>
                    </Box>
                    <Text color="blue.800"> {props?.selectedTime}</Text>
                </Center>
            </Box>
        </Box>
    )
}

export default Calender

const styles = StyleSheet.create({})