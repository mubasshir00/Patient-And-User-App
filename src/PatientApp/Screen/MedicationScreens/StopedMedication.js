import { Box, Center, Heading, ScrollView, Stack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { currentMedication } from './../../../assets/data/MedicationData/MedicationData';
import PressableComponent from './../../ReusableComponents/PressableComponents/PressableComponent';


const StopedMedication = () => {
    return (
        <ScrollView background="#F0F4F7">
            <Stack px="6" py="4">
                {currentMedication.map(item => {
                    const { id, medicine, subTitle, company, time, Dose, startingDate, lastDateofTaken } = item;
                    return (
                        <Box
                            background="white"
                            m="4"
                            borderRadius="10"
                            px="4"
                            py="2"
                            key={id}>
                            <Stack direction="column" my="2">
                                {/* medicine name */}
                                <Box flexDirection="row" alignItems="center" my="1">
                                    <Text fontWeight="bold" marginRight="2">
                                        Medicine
                                    </Text>
                                    <Text color="blue.500" fontSize="18" fontWeight="bold">
                                        {medicine}
                                    </Text>
                                </Box>

                                <Heading marginBottom="2" fontSize="14" color="gray.400">
                                    ({subTitle})
                                </Heading>

                                <Box
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    my="2"
                                >
                                    {/* company name */}
                                    <Stack alignItems="center" direction="column">
                                        <Text color="black" fontWeight="bold">
                                            Company
                                        </Text>
                                        <Text color="blue.500" fontSize="18" fontWeight="bold">
                                            {company}
                                        </Text>
                                    </Stack>

                                    {/* dose time */}
                                    <Stack alignItems="center" direction="column">
                                        <Text color="black" fontWeight="bold">
                                            Time
                                        </Text>
                                        <Text color="blue.500" fontSize="18" fontWeight="bold">
                                            {time}
                                        </Text>
                                    </Stack>

                                    {/* dose count */}
                                    <Stack alignItems="center" direction="column">
                                        <Text color="black" fontWeight="bold">
                                            Dose(s)
                                        </Text>
                                        <Text color="blue.500" fontSize="18" fontWeight="bold">
                                            {Dose}
                                        </Text>
                                    </Stack>
                                </Box>
                            </Stack>

                            <Stack>
                                <Box flexDirection="row" my="2">
                                    <Text fontWeight="bold">Starting Date : </Text>
                                    <Text color="blue.500"> {startingDate}</Text>
                                </Box>
                                <Box flexDirection="row">
                                    <Text fontWeight="bold">Last Date of Taken : </Text>
                                    <Text color="blue.500"> {lastDateofTaken}</Text>
                                </Box>
                            </Stack>

                            <Stack
                                alignItems="center"
                                my="3"
                                direction="row"
                                justifyContent="space-between">
                                <PressableComponent
                                    bgPressed="blue.500"
                                    px="2"
                                    py="2"
                                    rounded="4"
                                    width="100"
                                    >
                                    <Text color="white" fontWeight="bold" textAlign='center'>
                                        Resume 
                                    </Text>
                                </PressableComponent>
                                <PressableComponent
                                    bgPressed="red.500"
                                    px="2"
                                    py="2"
                                    rounded="4"
                                    width="100"
                                    >
                                    <Text color="white" fontWeight="bold"
                                    textAlign="center"
                                    >
                                        Delete
                                    </Text>
                                </PressableComponent>
                            </Stack>

                        </Box>
                    );
                })}
            </Stack>
        </ScrollView>
    )
}

export default StopedMedication

const styles = StyleSheet.create({})
