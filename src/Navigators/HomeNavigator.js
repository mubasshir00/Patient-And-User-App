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

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
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
            
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}

const styles = StyleSheet.create({})
