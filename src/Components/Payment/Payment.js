import { Box, CheckIcon, Heading, Select, Text ,Image, ScrollView, FormControl, Input, Center,Pressable} from 'native-base'

import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ProfileCard from '../../ReusableComponents/ProfileCard/ProfileCard'

const Payment = () => {
    const [cardOption, setCardOption] = useState("")
    const [otherPaymentOption, setOtherPaymentOption] = useState("")
    return (
        <ScrollView background="white" flex="1" px="4">
           <Box p="4" background="blue.100">
                <Box 
                background="white"
                borderRadius="10"
                p="2"
                >
                    <ProfileCard />
                </Box>
                <Box 
                background="white"
                my="4"
                py="3"
                px="2"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="6"
                >
                    <Heading fontSize="18">Payment Total</Heading>
                    <Text color="blue.400" fontWeight="bold" fontSize="18">200 $</Text>
                </Box>
                <Box>
                    <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    >
                        <Heading fontSize="18">Pay Using Card</Heading>
                        <Select
                        minWidth="130"
                        background="white"
                        selectedValue={cardOption}
                        accessibilityLabel="Payment Option"
                        placeholder="Payment Option"
                        _selectedItem={{
                            bg:"white",
                        }}
                        mt="1"
                        height="8"
                        onValueChange={(itemValue)=>setCardOption(itemValue)}
                        >
                            <Select.Item label="Debit Card"/>
                            <Select.Item label="Credit Card" />
                            <Select.Item label="Bkash" />
                            <Select.Item label="Nagad" />
                        </Select>
                    </Box>
                </Box>


                <Box>
                </Box>


                <Box>
                   <Image 
                   source={require('../../assets/images/card.jpeg')}
                   alt="card"
                   resizeMode="contain"
                   /> 
                </Box>

                <Box>
                    <FormControl>
                        <FormControl.Label>
                            Card No
                        </FormControl.Label>
                        <Input background="white"/>
                        <Box>
                            <FormControl.Label>
                                Validity
                            </FormControl.Label>
                            <Input background="white" />
                            <FormControl.Label>
                                CVV
                            </FormControl.Label>
                            <Input background="white" />
                        </Box>
                        <FormControl.Label>
                            Name
                        </FormControl.Label>
                        <Input background="white" />

                        <Box background="white" mt="4">
                            <Select
                                minWidth="130"
                                background="white"
                                selectedValue={otherPaymentOption}
                                accessibilityLabel="Other Payment Option"
                                placeholder="Other Payment Option"
                                _selectedItem={{
                                    bg: "white",
                                }}
                                
                                onValueChange={(itemValue) => setOtherPaymentOption(itemValue)}
                            >
                                <Select.Item label="Net Banking" />
                                <Select.Item label="Offline Banking" />
                                <Select.Item label="Bkash" />
                                <Select.Item label="Nagad" />
                            </Select>
                        </Box>

                    </FormControl>
                </Box>

           </Box>
            <Pressable
                //navigation to summery screen
                
            >
                {({ isHovered, isFocused, isPressed }) => {
                    return (
                        <Box
                            bg={isPressed ? "blue.400" : isHovered ? "blue.300" : "blue.500"}
                            py="2"
                            mx="4"
                            my="2"
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
                                >Confirm</Text>
                            </Center>
                        </Box>
                    )
                }}
            </Pressable>
        </ScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({})
