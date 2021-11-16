import { Box, ScrollView } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MedicalRecords from './MedicalRecords/MedicalRecords'

const MedicalRecord = () => {
    return (
        <ScrollView backgroundColor="blue.100" >
            <MedicalRecords/>
        </ScrollView>
    )
}

export default MedicalRecord

const styles = StyleSheet.create({})
