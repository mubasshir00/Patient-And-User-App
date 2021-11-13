import { useNavigation } from '@react-navigation/native'
import { Box, Pressable ,Text} from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const PressableComponent = ({children,...props}) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => navigation.navigate(`${props.navigationName }`)}
        >
            {({isHovered,isFocused,isPressed})=>{
                return(
                    <Box 
                    bg={isPressed ? "blue.500" : isHovered ? "blue.800" : `${props.bgPressed}`}
                    rounded="8"
                    py={props.py}
                    px={props.px}
                    mx={props.mx}
                    my={props.my}
                    // alignItems="flex-start"
                    // alignItems={props.alignItems}
                    style={{
                        transform:[
                            {
                                scale:isPressed ? 0.96:1,
                            }
                        ]
                    }}
                    >
                       
                            {children}
                    </Box>
                )
            }}
        </Pressable>
    )
}

export default PressableComponent

const styles = StyleSheet.create({})
