import { Flex, Box, Image, Heading } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const PostAppointmentCard = ({ postAppointment }) => {
    return (
        <Box>
            <Flex>
                {
                    postAppointment.map((item) => {
                        const { id, name, title, image, dateDay, date, day, time, active } = item

                        return (
                            <Box
                                backgroundColor="white"
                                my={2}
                                key={id}
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="space-between"
                                p={2}
                                borderRadius={4}
                            >
                                <Box
                                >
                                    <Image
                                        source={image}
                                        resizeMode={'contain'}
                                        alt="image"
                                        size={50}
                                        borderRadius={100}
                                    />
                                </Box>
                                <Box
                                    color={'black'}
                                >
                                    <Heading fontSize={13}>{name}</Heading>
                                    <Text fontSize={13} >{title}</Text>
                                </Box>

                                <Box
                                    flexDirection="row"
                                >
                                    <Box
                                        pr={1}
                                    >
                                        <Icon
                                            name="calendar-o"
                                            style={{ position: 'relative' }}
                                            size={17}

                                        />
                                    </Box>

                                    <Text
                                        fontSize={13}
                                    >{date}</Text>
                                </Box>

                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

export default PostAppointmentCard

const styles = StyleSheet.create({})
