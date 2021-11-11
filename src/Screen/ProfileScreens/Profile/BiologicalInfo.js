import { ScrollView ,Stack,Box,Input,FormControl} from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { biologicalData } from '../../../assets/data/Accordion'

const BiologicalInfo = () => {
    return (
        <ScrollView
            w={{
                base: '90%',
                md: '90%',
            }}
        >
            <Stack
                space={2.5}
                alignSelf="center"
                px="4"
                safeArea
                mt="4"
                w={{
                    base: '100%',
                    md: '25%'
                }}
            >
                <Box>
                    {
                        biologicalData.map((item, index) => {
                            return (
                                <FormControl key={item.id} isDisabled mb="2">
                                    <FormControl.Label>
                                        {item.title}
                                    </FormControl.Label>
                                    <Input placeholder={item.text} />
                                </FormControl>
                            )
                        })
                    }
                </Box>
            </Stack>
        </ScrollView>
    )
}

export default BiologicalInfo

const styles = StyleSheet.create({})
