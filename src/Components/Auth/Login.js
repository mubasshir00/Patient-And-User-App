import { Box,FormControl,Image, Input, ScrollView,Pressable,Center } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Login = () => {
    return (
        <ScrollView>
            <Image
            source={require('../../assets/images/login.jpg')}
            alt="login"
            />
            <Box mt="4" mx="4">
                <FormControl isRequired>
                    <FormControl.Label>
                        Email
                    </FormControl.Label>
                    <Input/>
                    <FormControl.Label>
                        Password
                    </FormControl.Label>
                    <Input type="password"/>
                    <Pressable
                    //navigation to summery screen
                    >
                        {({ isHovered, isFocused, isPressed }) => {
                            return (
                                <Box
                                    bg={isPressed ? "blue.400" : isHovered ? "blue.300" : "blue.500"}
                                    py="2"
                                    
                                    my="4"
                                    rounded="8"
                                    style={{
                                        transform: [
                                            {
                                                scale: isPressed ? 0.95 : 1,
                                            }
                                        ]
                                    }}

                                >
                                    <Center color="white">
                                        <Text
                                            color="white"
                                            fontWeight="bold"
                                            fontSize="16"
                                        >Login</Text>
                                    </Center>
                                </Box>
                            )
                        }}
                    </Pressable>
                </FormControl>

                <Center>Don't have an account?</Center>

                <Pressable
                //navigation to summery screen
                >
                    {({ isHovered, isFocused, isPressed }) => {
                        return (
                            <Box
                                bg={isPressed ? "blue.400" : isHovered ? "blue.300" : "blue.500"}
                                py="2"

                                my="4"
                                rounded="8"
                                style={{
                                    transform: [
                                        {
                                            scale: isPressed ? 0.95 : 1,
                                        }
                                    ]
                                }}

                            >
                                <Center color="white">
                                    <Text
                                        color="white"
                                        fontWeight="bold"
                                        fontSize="16"
                                    >Create Account</Text>
                                </Center>
                            </Box>
                        )
                    }}
                </Pressable>

            </Box>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})
