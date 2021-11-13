import { useNavigation } from '@react-navigation/native'
import { Box, FormControl, Text, Input, Stack, ScrollView, Center ,Image} from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { profileData } from '../../../assets/data/Profile/ProfileData'



const PersonalInformation = () => {
    const { id, name, image, bloodgroup, height, weight} = profileData
    return (
        <ScrollView>
            <Center>
                <Box>
                    <Box>
                        <Image

                            alt="ProfileImage" />
                    </Box>
                    <Box>
                        <Text 
                        fontSize="20" 
                        color="black"
                        fontWeight="bold"
                        >{name}</Text>
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon name="edit" size={30}/>
                </Box>
                
            </Center>
            <FormControl>
                <Stack mx="4">
                    <FormControl.Label>Name</FormControl.Label>
                    <Input type="text" placeholder="Full Name"/>
                    <FormControl.Label>NID</FormControl.Label>
                    <Input type="text" placeholder="NID" />
                    <FormControl.Label>Death of Birth</FormControl.Label>
                    <Input type="text" placeholder="1 January 1900" />
                    <FormControl.Label>Mobile</FormControl.Label>
                    <Input type="text" placeholder="+8801* ***** ***" />
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="text" placeholder="bdemr@gmail.com" />
                    <FormControl.Label>Address</FormControl.Label>
                    <Input type="text" placeholder="Address" />
                </Stack>
            </FormControl>
        </ScrollView>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({})
