import { Box,Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Login from '../Components/Auth/Login'

const AuthScreen = () => {
    return (
        <Box>
            <Login/>
        </Box>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})
