import { Box ,FormControl,Icon,Input,ScrollView,Stack,Text} from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import PressableComponent from '../../ReusableComponents/PressableComponents/PressableComponent'


const AddMedication = () => {
    return (
        <ScrollView
        >
            <FormControl 
            px="10"
            >
                <FormControl.Label>
                    Brand Name
                </FormControl.Label>
                <Input/>

                <FormControl.Label>
                    Dose
                </FormControl.Label>
                <Input />

                <FormControl.Label>
                    Direction
                </FormControl.Label>
                <Input />

                <FormControl.Label>
                    Start Day
                </FormControl.Label>
                <Input 
                    InputRightElement={
                        <Icon
                            as={
                                <FontAwesomeIcon
                                    name="calendar"
                                />
                            }
                            size={5}
                            color="muted.400"
                        />
                    }
                />

                <FormControl.Label>
                    End Day
                </FormControl.Label>
                <Input 
                InputRightElement={
                    <Icon
                    as={
                      <FontAwesomeIcon
                      name="calendar"
                      />
                    }
                    size={5}
                    color="muted.400"
                    />
                }
                />

                <Box marginTop="4" flexDirection="row" alignItems="center">
                    <FontAwesomeIcon
                    name="circle-thin"
                    size={20}
                    />
                    <Text marginLeft="2" fontSize="18">As Needed</Text>
                </Box>
                <Box my="2" flexDirection="row" alignItems="center">
                    <FontAwesomeIcon
                        name="circle-thin"
                        size={20}
                    />
                    <Text marginLeft="2" fontSize="18">Remid me to take this medicine</Text>
                </Box>
            </FormControl>
            <Stack
                alignItems="center"
                my="3"
                direction="row"
                justifyContent="space-between"
                px="10"
                >
                <PressableComponent
                    bgPressed="blue.500"
                    px="2"
                    py="2"
                    width="120"
                    rounded="3">
                    <Text textAlign="center" color="white" fontWeight="bold">
                        Add
                    </Text>
                </PressableComponent>
                <PressableComponent
                    bgPressed="red.500"
                    px="2"
                    py="2"
                    rounded="3"
                    width="120"
                    >
                    <Text textAlign="center" color="white" fontWeight="bold">
                        Cancel
                    </Text>
                </PressableComponent>
            </Stack>
        </ScrollView>
    )
}

export default AddMedication

const styles = StyleSheet.create({})
