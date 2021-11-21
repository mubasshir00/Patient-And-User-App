import { useNavigation } from '@react-navigation/native'
import { Box, Text, Image, Heading, Checkbox, Icon, ScrollView, Center, Pressable, Input } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import ProfileCard from '../../ReusableComponents/ProfileCard/ProfileCard'


const Summery = () => {

    const navigation = useNavigation()

    return (
        <Box background="#F0F4F7" flex="1">

            <Box background="white" mt="4" px="2" py="2.5" borderRadius="10" mx="4">
                <ProfileCard />
            </Box>

            <Box 
            background="white" 
            mt="4" mx="4"
            px="2" py="1" 
            borderRadius="10" 
            flexDirection="row" alignItems="center"
            justifyContent="space-between"
            >
                <Text fontWeight="bold">Payment Total</Text>
                <Box flexDirection="row" alignItems="center">
                    <Text>BDT </Text>
                    <Text fontSize="22" color="#5099F3" fontWeight="bold">200</Text>
                </Box>
            </Box>
            
            <ScrollView
            p="4"
            mt="4"
            mx="4"
            >
                <Box 
                flexDirection="row"
                justifyContent="space-between"
                
                >
                    <Heading
                        color="black"
                        fontSize="18"
                    >Appointment</Heading>

                    <Text>Change Date</Text>
                </Box>

                <Box 
                backgroundColor="white"
                borderRadius="10"
                my="5"
                p="3"
                >
                    <Text>On 21st June, 2021</Text>
                    <Heading fontSize="16">Wed 10:30 AM</Heading>
                </Box>

                <Box pb="4">
                <Heading fontSize="18">Patient Details</Heading>
                 <Text color="grey">select patient for consultation</Text>
                </Box>

                <Box my="2" background="white" padding="2">
                    <Checkbox
                    value="blue"
                    size="md"
                    colorScheme="blue"
                    color="blue.700"
                    borderRadius="100"
                    icon={
                        <Icon
                            
                            as={<Entypo name="circle" size={10} />}
                        />
                    }
                    defaultIsChecked
                    >
                        <Text px="2" fontSize="15">Shane Bryant</Text>
                    </Checkbox>
                </Box>

                <Box my="2" background="white" padding="2">
                    <Checkbox
                        value="blue"
                        size="md"
                        colorScheme="blue"
                        color="blue.700"
                        borderRadius="100"
                        
                        icon={
                            <Icon

                                as={<Entypo name="plus" />}
                            />
                        }
                        defaultIsChecked
                    >
                        {''}
                        <Input px="1" py="0.5" width="86%" fontSize="15"/>
                    </Checkbox>
                </Box>

            </ScrollView>

            <Pressable
                //navigation to summery screen
                onPress={() => {
                    navigation.navigate('Payment')
                }}
            >
                {({ isHovered, isFocused, isPressed }) => {
                    return (
                        <Box
                            bg={isPressed ? "blue.400" : isHovered ? "blue.300" : "#5099F3"}
                            py="2"
                            mx="4"
                            my="1"
                            rounded="8"
                            style={{
                                transform: [
                                    {
                                        scale: isPressed ? 0.95 : 1,
                                    }
                                ]
                            }}

                        >
                            <Center>
                                <Text
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="16"
                                >
                                    Proceed To Payment
                                </Text>
                            </Center>
                        </Box>
                    )
                }}
            </Pressable>

        </Box>
    )
}

export default Summery

const styles = StyleSheet.create({
    image:{
        
    }
})
