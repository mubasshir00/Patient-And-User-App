import { Box, Text, Image,Heading} from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { StyleSheet, View } from 'react-native'
const ratingAv = 4

const ProfileCard = (props) => {
    const { name, detailsAddress, image} = props
    return (
        <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                flexDirection="row"
                alignItems="center"
            >
                <Image
                    source={{ uri: image }}
                    alt="Tesla"
                    style={styles.image}
                    size={60}
                    borderRadius={100}
                />
                <Box p="2">
                    <Heading fontSize="16">{name}</Heading>
                    <Text>{detailsAddress}</Text>
                </Box>
            </Box>
            <Box>
                <Box flexDirection="row">
                    <Box flexDirection="row">
                        {
                            Array(ratingAv).fill().map((_, i) => (
                                <Box key={i}>
                                    <AntDesign
                                        name="star"
                                        color="orange"
                                    />
                                </Box>
                            ))
                        }
                    </Box>
                    <Box flexDirection="row">
                        {
                            Array(5 - ratingAv).fill().map((_, i) => (
                                <Box key={i}>
                                    <AntDesign
                                        name="staro"
                                    />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default ProfileCard

const styles = StyleSheet.create({})
