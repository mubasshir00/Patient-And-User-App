import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HomeScreen from '../Screen/HomeScreen'
import Covid19Screen from '../SpecialistScreen/Covid19Screen'
import PulmonoScreen from '../SpecialistScreen/PulmonoScreen'
import CardioScreen from '../SpecialistScreen/CardioScreen'
import PhysicianScreen from '../SpecialistScreen/PhysicianScreen'
import OnlineAppointmentScreen from '../Screen/OnlineAppointmentScreen'
import FreeConsultationScreen from '../Screen/FreeConsultationScreen'
import ViewAllScreen from '../Screen/ViewAllScreen'
import SingleSpecialist from '../QuickSpecialist/SingleSpecialist'
import Schedule from '../Components/Schedule/Schedule'
import Summery from '../Components/Summery/Summery'
import Payment from '../Components/Payment/Payment'
import PersonalInformation from '../Screen/ProfileScreens/Profile/PersonalInformation'
import MyVitals from '../Screen/ProfileScreens/MyVitals/MyVitals'
import BloodTest from '../Screen/MyVitalsScreens/BloodTest'
import HeartRate from '../Screen/MyVitalsScreens/HeartRate'
import BMI from '../Screen/MyVitalsScreens/BMI'
import Respiratory from '../Screen/MyVitalsScreens/Respiratory'
import OxygenSaturation from '../Screen/MyVitalsScreens/OxygenSaturation'
import Medication from '../Screen/MedicationScreens/Medication'
import BloodPressure from '../Screen/MyVitalsScreens/BloodPressure'
import PrescriptionScreen from '../Screen/MedicalRecords/PrescriptionScreen'
import LabReportScreen from '../Screen/MedicalRecords/LabReportScreen'
import EmailsScreens from '../Screen/MedicalRecords/EmailsScreens'
import TransactionScreen from '../Screen/TransactionHistory/TransactionScreen'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Covid19"
                component={Covid19Screen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Pulmono"
                component={PulmonoScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Physician"
                component={PhysicianScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Cardio"
                component={CardioScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Online Appointment"
                component={OnlineAppointmentScreen}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="Free Consultation"
                component={FreeConsultationScreen}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="All"
                component={ViewAllScreen}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="Details"
                component={SingleSpecialist}
                options={{
                    headerShown: true,
                    headerStatusBarHeight: 2,
                    headerTitleAlign: 'center',
                },
                    ({ route }) => ({ title: route.params.name })
                }
            />
            <Stack.Screen
                name="Schedule"
                component={Schedule}
            />
            <Stack.Screen
                name="Summery"
                component={Summery}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
            />
            <Stack.Screen
            name="Personal Information"
            component={PersonalInformation}
            />
            <Stack.Screen
            name="My Vitals"
            component={MyVitals}
            />  
            <Stack.Screen
            name="Blood Test"
            component={BloodTest}
            />
            <Stack.Screen
            name="Heart Rate"
            component={HeartRate}
            />
            <Stack.Screen
            name="BMI"
            component={BMI}
            />
            <Stack.Screen
            name="Respiratory"
            component={Respiratory}
            />
            <Stack.Screen
            name="Oxygen Saturation"
            component={OxygenSaturation}
            />
            <Stack.Screen
            name="Medication"
            component={Medication}
            />
            <Stack.Screen 
            name="Blood Pressure"
            component={BloodPressure}
            />
            <Stack.Screen
            name="Prescription"
            component={PrescriptionScreen}
            />
            <Stack.Screen
            name="Lab Report"
            component={LabReportScreen}
            />
            <Stack.Screen
            name="Emails"
            component={EmailsScreens}
            />
            <Stack.Screen
            name="Transaction History"
            component={TransactionScreen}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}

const styles = StyleSheet.create({})
