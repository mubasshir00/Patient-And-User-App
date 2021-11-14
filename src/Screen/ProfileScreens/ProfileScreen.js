import { Box,Pressable,ScrollView,Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Profile from './Profile/Profile'

import { profileData } from '../../assets/data/Profile/ProfileData'
import PressableComponent from '../../ReusableComponents/PressableComponents/PressableComponent'

import FontAweSome from 'react-native-vector-icons/FontAwesome'
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const [profileState, setProfileState] = useState([])
    
    const navigation = useNavigation()

    useEffect(() => {
        setProfileState(profileData)
        return () => {
            setProfileState([])
        }
    }, [])

    console.log(image);
    const { id, name, image, bloodgroup, height,weight} = {...profileState}
    return (
        <ScrollView backgroundColor="blue.50" py="4">

            <Profile 
            name={name} 
            image={image} 
            bloodgroup={bloodgroup} 
            height={height} 
            weight={weight}/>


            <PressableComponent
                mx="3" py="2"
                px="3" my="2"
                fontSize="18"
                alignItems="center"
                bgPressed="white"
                navigationName="Medication"
                rounded="8"
            >
                <Box
                    flexDirection="row"
                    color="black"
                    fontWeight="bold"
                    alignItems="center"
                    fontSize="19"
                    justifyContent="space-between"
                >
                    <Box flexDirection="row" alignItems="center">
                        <FontAweSome5 name="hand-holding-medical" style={[styles.icon, { fontSize: 15, textAlign: 'center', alignItems: 'center' }]} />
                        {`  `}
                        <Text color="black">Medication</Text>
                    </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
                </Box>
            </PressableComponent>

            <PressableComponent  
            mx="3" py="2" 
            px="3" my="2"
            fontSize="18" 
            alignItems="center" 
            bgPressed="white"
            navigationName="Personal Information"
            rounded="8"
            >

            <Box 
            flexDirection="row" 
            color="black" 
            fontWeight="bold" 
            alignItems="center"
            fontSize="19"
            justifyContent="space-between"
            >
                <Box flexDirection="row">
                    <FontAweSome  name="user-circle-o" style={styles.icon} />
                    <Box>{`   `}</Box>
                    <Text color="black">Personal Information</Text>
                </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
            </Box>

            </PressableComponent>

            <PressableComponent 
                mx="3" py="2"
                px="3" my="2"
                fontSize="18"
                alignItems="center"
                bgPressed="white"
                navigationName="My Vitals"
                rounded="8"
            >
                <Box
                    flexDirection="row"
                    color="black"
                    fontWeight="bold"
                    alignItems="center"
                    fontSize="19"
                    justifyContent="space-between"
                >
                    <Box flexDirection="row">
                        <FontAweSome5 name="notes-medical" style={styles.icon}/>
                        {`    `}
                        <Text color="black">My Vitals</Text>
                    </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
                </Box>
            </PressableComponent>

            <PressableComponent 
                mx="3" py="2"
                px="3" my="2"
                fontSize="18"
                alignItems="center"
                bgPressed="white"
                rounded="8"
            >
                <Box
                    flexDirection="row"
                    color="black"
                    fontWeight="bold"
                    alignItems="center"
                    fontSize="19"
                    justifyContent="space-between"
                >
                    <Box flexDirection="row">
                        <FontAweSome5 name="book-medical" style={styles.icon} />
                        {`   `}
                        <Text color="black">Medical Records</Text>
                    </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
                </Box>
            </PressableComponent>

            <PressableComponent 
                mx="3" py="2"
                px="3" my="2"
                fontSize="18"
                alignItems="center"
                bgPressed="white"
                rounded="8"
            >
                <Box
                    flexDirection="row"
                    color="black"
                    fontWeight="bold"
                    alignItems="center"
                    fontSize="19"
                    justifyContent="space-between"
                >
                    <Box flexDirection="row" alignItems="center">
                        <FontAweSome5 name="money-check" style={[styles.icon, { fontSize: 15 ,textAlign:'center',alignItems:'center' }]} />
                        {`  `}
                        <Text color="black">Transaction History</Text>
                    </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
                </Box>
            </PressableComponent>

        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    icon:{
        fontSize:20,
        color:'black'
    }
})
