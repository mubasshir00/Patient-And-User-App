import { Box, Center, FlatList, Input } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import DoctorList from '../Components/DoctorList/DoctorList';

const data = require('../assets/data/DoctorList/Covid19.json');
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import SearchDoctor from '../Search/SearchDoctor';

const { width, height } = Dimensions.get('window')

const Covid19Screen = () => {
    const [doctors, setDoctors] = useState([])
    const [doctorFiltered, setDoctorFiltered] = useState([])
    const [focus, setFocus] = useState();
    
    useEffect(() => {
        setDoctors(data);
        setDoctorFiltered(data);
        setFocus(false)

        return () => {
            setDoctors([]);
            setDoctorFiltered([]);
            setFocus();
        }
    }, [])

    const searchDoctor = (text) => {
        setDoctorFiltered(
            doctors.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }


    return (
        <Box backgroundColor="#F0F4F7" flex={1} >
            <Box
                borderRadius="30"
                borderColor="#5099F3"
                borderWidth="2"
                background="white"
                px="3"
                py="2"
                style={styles.filterIcon}>
                <FontAweSome color="#5099F3" name="filter" size={30} />
            </Box>
            <Center mt="4">
                <Center
                    mx="3"
                    w={{
                        base: "100%",
                        md: "25%",
                    }}
                    flexDirection="row"
                >
                    <Input
                        mx="3"
                        placeholder="Search"
                        w={{
                            base: "85%",
                            md: "25%",
                        }}
                        backgroundColor="white"
                        borderRadius={5}
                        onFocus={openList}
                        onChangeText={(text) => searchDoctor(text)}
                    />

                    {
                        focus == true ? (
                            <FontAweSome onPress={onBlur} name="close" size={30} />
                        ) : null
                    }
                </Center>

                {focus == true ? (
                    <SearchDoctor
                        doctorFiltered={doctorFiltered}
                    />
                ) : (
                    <FlatList
                        data={doctors}
                        renderItem={
                            ({ item }) => (
                                <DoctorList
                                    {...item}
                                />
                            )}
                        w={{
                            base: "85%",
                            md: "25%",
                        }}
                        mt="2"
                    />
                )}

            </Center>

        </Box>
    )
}

export default Covid19Screen

const styles = StyleSheet.create({
    filterIcon: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        zIndex: 99,

    }
})
