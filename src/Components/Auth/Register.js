import { Box, FormControl, Input, Stack, Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Register = () => {
    return (
        <Box 
        w={{
            base:"90%",
            md:"25%",
        }}
        >
           <FormControl>
                <Stack mx="4">
                    <FormControl.Label>
                        Full Name
                    </FormControl.Label>
                    <Input type="text"
                        defaultValue="" placeholder="Full Name"
                    />
                    <FormControl.Label>
                        Email
                    </FormControl.Label>
                    <Input type="text" placeholder="Email Address"/>
                    <FormControl.Label>
                        
                    </FormControl.Label>
                </Stack>
           </FormControl>
        </Box>
    )
}

export default Register

const styles = StyleSheet.create({})
