import React  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon  from "react-native-vector-icons/FontAwesome";
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from "../Screen/HomeScreen";
import AppointmentScreen from "../Screen/AppointmentScreen";
import ProfileScreen from "../Screen/ProfileScreens/ProfileScreen";
import MedicalRecord from "../Screen/MedicalRecord";

//Stack
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator()

const Main = () =>{
    return (
        <Tab.Navigator
        initialRouteName="Home"
            screenOptions={{
            KeyboardHidesTabBar:true,
            showLabel:false,
            activeTintColor:'#e91e63',
        }}
        >
            <Tab.Screen
              name="BDEMR"
              component={HomeNavigator}
              options={{
                  tabBarIcon:({color}) => (
                      <Icon
                        name="home"
                        style={{position:'relative'}}
                        color={color}
                        size={30}
                      />
                  ),
                  tabBarShowLabel:false,
                  headerTitleAlign:'center',
                  headerShown:false
              }}
            />
            <Tab.Screen
            name="Appointment"
                component={AppointmentScreen}
            options={{
                tabBarIcon:({color}) =>(
                    <Icon
                    name="calendar-o"
                    style={{position:'relative'}}
                    color={color}
                    size={30}
                    />
                ),
                tabBarShowLabel: false,
                headerTitleAlign: 'center'
            }}
            />
            <Tab.Screen
            name="Medical Record"
            component={MedicalRecord}
            options={{
                tabBarIcon:({color})=>(
                    <AntDesign
                    name="medicinebox"
                    style={{position:'relative'}}
                    color={color}
                    size={30}
                    />
                ),
                tabBarShowLabel: false,
                headerTitleAlign: 'center'
            }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    ),
                    tabBarShowLabel: false,
                    headerTitleAlign: 'center'
                }}
            />
        </Tab.Navigator>
    )
}
export default Main;