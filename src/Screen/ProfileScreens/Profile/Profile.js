import { Box, Center, Heading, ScrollView,Image,Text } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

const {width,height} = Dimensions.get('window')

const Profile = ({ id, name, image, bloodgroup, height, weight}) => {
    return (
        <Box mx="3">
            <Box>
                <Center>
                    <Image
                    source={{
                    uri:'https://i.pinimg.com/564x/44/00/9e/44009edaece2cef6daa7ee348e11761d.jpg'
                    }
                    }
                    alt="hh"
                    style={styles.image}
                    />
                </Center>
            </Box>
            <Box>
                <Center>
                    <Text fontWeight="bold" fontSize="17">{name}</Text>
                </Center>
            </Box>
            <Box 
            flexDirection="row"
            justifyContent="space-between"
            my="3"
            >
                <Box 
                background="white"
                width={width/3.7}
                alignItems="center"
                py="2"
                >
                    <Text color="blue.500" fontWeight="bold">Blood Group</Text>
                    <Text color="black">{bloodgroup}</Text>
                </Box>
                <Box 
                background="white"
                width={width / 3.7}
                alignItems="center"
                py="2"
                >
                    <Text color="blue.500" fontWeight="bold">Height</Text>
                    <Text color="black">{height}</Text>
                </Box>
                <Box 
                background="white"
                width={width / 3.7}
                alignItems="center"
                py="2"
                >
                    <Text color="blue.500" fontWeight="bold">Weight</Text>
                    <Text color="black">{weight}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile

const styles = StyleSheet.create({
    image:{
        width:90,
        height:90,
        borderRadius:100
    }
})
