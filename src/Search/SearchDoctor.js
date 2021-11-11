import { Box, Image, List } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuickSpecialist from '../QuickSpecialist/QuickSpecialist'

const SearchDoctor = (props) => {
    const {productFiltered} = props
    return (
        <Box>
           {
               productFiltered.length > 0 ? (
                   productFiltered.map((item)=>(
                       <List>
                           <Box key={id}>
                               <Image
                                   source={{
                                       uri: item.image
                                   }}
                               />
                           </Box>
                           <Box>
                               <Text>{item.name}</Text>
                               <Text>{item.description}</Text>
                           </Box>
                       </List>
                   ))
               ) :(
                   <Box>
                       <Text style={{alignSelf:'center'}}>No Product Match</Text>
                    </Box>
               )
           }
        </Box>
    )
}

export default SearchDoctor

const styles = StyleSheet.create({})
