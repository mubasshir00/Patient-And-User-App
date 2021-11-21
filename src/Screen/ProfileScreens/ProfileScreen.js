import { Box,Image,Pressable,ScrollView,Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Profile from './Profile/Profile'

import { profileData } from '../../assets/data/Profile/ProfileData'

import PressableComponent from '../../ReusableComponents/PressableComponents/PressableComponent'

import FontAweSome from 'react-native-vector-icons/FontAwesome'
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { fontWeight } from 'styled-system'

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
    const { id, name, image, heartRate, bloodgroup, userHeight, age, weight, BMI, bloodPress, oxygenSaturation, latestedUpdate} = {...profileState}
    // console.log(oxygenSaturation.PR);
    return (
        <ScrollView backgroundColor="#F0F4F7"  >

            <Profile 
            name={name} 
            image={image} 
            bloodgroup={bloodgroup} 
            userHeight={userHeight}
            weight={weight}
            BMI={BMI}
            bloodPress={bloodPress}
            oxygenSaturation={oxygenSaturation}
            age={age}
            latestedUpdate={latestedUpdate}
                heartRate={heartRate}
            />


            <PressableComponent
                mx="3" py="2"
                px="3"
                mt="4" mb="2"
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
                        {/* <FontAweSome5 name="hand-holding-medical" style={[styles.icon, { fontSize: 15, textAlign: 'center', alignItems: 'center' }]} /> */}
                        <Image source={require('../../assets/images/ProfileScreenImage/medications.png')}
                        alt="Medication"
                        size={30}
                        resizeMode="contain"
                        />
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
                        <Image source={require('../../assets/images/ProfileScreenImage/profile.png')}
                            alt="Medication"
                            size={30}
                            resizeMode="contain"
                        />
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
                    <Box  flexDirection="row">
                        <Image source={require('../../assets/images/ProfileScreenImage/vital-signs.png')}
                            alt="Medication"
                            size={30}
                            resizeMode="contain"
                        />
                        {'   '}
                        <Text color="black">My Vitals</Text>
                    </Box>
                    <FontAweSome name="chevron-right" style={styles.icon} />
                </Box>
            </PressableComponent>

            {/* <PressableComponent 
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
            </PressableComponent> */}

            <PressableComponent 
                mx="3" py="2"
                px="3" my="2"
                fontSize="18"
                alignItems="center"
                bgPressed="white"
                rounded="8"
                navigationName="Transaction History"
            >
                <Box
                    flexDirection="row"
                    color="black"
                    fontWeight="bold"
                    alignItems="center"
                    fontSize="19"
                    justifyContent="space-between"
                    mb="2"
                    borderRadius="10"
                >
                    <Box flexDirection="row" alignItems="center">
                        <Image source={require('../../assets/images/ProfileScreenImage/money-transfer.png')}
                            alt="Medication"
                            size={30}
                            resizeMode="contain"
                        />
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
        color:'black',
    }
})
