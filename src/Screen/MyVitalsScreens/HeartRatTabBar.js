import { Box,Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const HeartRatTabBar = () => {
    const [index, setIndex] = useState(0)
    const [routes, setRoutes] = useState([
        { key: 'minimum', title1: 'Minimum' },
        { key: 'maximum', title1: 'Stopped', title2: 'Medication' },
    ])
    return (
        <Box>
            <Text></Text>
        </Box>
    )
}

export default HeartRatTabBar

const styles = StyleSheet.create({})
