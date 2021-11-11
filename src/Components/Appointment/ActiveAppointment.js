import { Box, Center, Flex, Heading, Image } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const ActiveAppointment = ({ activeApointment }) => {
    return (
        <Box p={3}>
            <Heading >Active</Heading>
            <Flex>
                {
                    activeApointment.map((item) => {
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
                                borderRadius={10}
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
                                <Box>
                                    <Box
                                        pb={3}
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
                                        >On {date}</Text>
                                    </Box>
                                </Box>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <Box
                                        pr={1}
                                    >
                                        <Icon
                                            name="clock-o"
                                            style={{ position: 'relative' }}
                                            size={17}
                                        />
                                    </Box>
                                    <Text>{day}</Text>
                                    <Text>{time}</Text>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

export default ActiveAppointment

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 100
    }
})
