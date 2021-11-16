import { Box,Text,Image, ScrollView, Center } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { prescriptionData } from '../../assets/data/MedicalRecordsData/ConsultationData'

const {width,height} = Dimensions.get('screen')

const PrescriptionScreen = () => {
    return (
        <ScrollView background="blue.100">
                <Box
                    flex="1"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                    mt="2"
                >
                    {
                        prescriptionData.map((item) => {
                            const { id, image, date } = item
                            return (
                                <Box key={id}
                                    px="2"
                                >
                                    <Box>
                                        <Image
                                            source={image}
                                            alt="i"
                                            resizeMode={'cover'}
                                            width={width / 2.5}
                                            height={width / 2}
                                        />
                                        <Box>
                                            <Text
                                             fontWeight="bold" textAlign="center"
                                             my="2"
                                             >{date}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
        </ScrollView>
    )
}

export default PrescriptionScreen

const styles = StyleSheet.create({})
