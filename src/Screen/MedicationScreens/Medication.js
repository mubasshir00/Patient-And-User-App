import { Box, Pressable, Text} from 'native-base'
import React, { useState } from 'react'
import { Animated, Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import { TabView,SceneMap } from 'react-native-tab-view'
import AddMedication from './AddMedication'
import CurrentMedication from './CurrentMedication'
import StopedMedication from './StopedMedication'


const initialLayout = {width:Dimensions.get('window').width}

const renderScene = SceneMap({
    CurrentMedication: CurrentMedication,
    StopedMedication: StopedMedication,
    AddMedication: AddMedication
})

const Medication = () => {
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: 'CurrentMedication', title1: 'Current', title2:'Medication'},
        { key: 'StopedMedication', title1: 'Stopped', title2: 'Medication'},
        // { key: 'AddMedication', title1: 'Add', title2: 'Medicine'}
    ])

    const renderTabBar = (props) =>{
        const inputRange = props.navigationState.routes.map((x,i)=>i);
        return(
            <Box flexDirection="row" background="blue.100">
                {
                    props.navigationState.routes.map((route,i)=>{
                        const opacity = props.position.interpolate({
                            inputRange,
                            outputRange:
                            inputRange.map((inputIndex)=>
                            inputIndex === i ? 1:0.5
                            ),
                        });
                        const color = index === i ? '#1f2937' : '#a1a1aa';
                        const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

                        return(
                            <Box 
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            flex={1}
                            alignItems="center"
                            p="3"
                            cursor="pointer"
                            key={i}
                            >
                                <Pressable
                                onPress={()=>{
                                    console.log(i);
                                    setIndex(i);
                                }}
                                >
                                    <Animated.Text 
                                    style={{color}}>
                                        <Box>
                                            <Text 
                                            textAlign="center"
                                            fontWeight="bold"
                                            >
                                                {route.title1}
                                            </Text>
                                            <Text 
                                            textAlign="center"
                                            fontWeight="bold"
                                            >
                                                {route.title2}
                                            </Text>
                                        </Box>
                                    </Animated.Text>
                                </Pressable>
                            </Box>
                        )
                    })
                }
            </Box>
        )
    }

    return (
            <TabView
            navigationState={{index,routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                // marginTop:StatusBar.currentHeight
                
            }}
            />
    )
}

export default Medication

const styles = StyleSheet.create({})
