import { ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { Box, Text } from 'native-base';

const CategoryFilter = (props) => {
  return (
    <ScrollView bounces={true} horizontal={true} style={{backgroundColor:"#f2f2f2"}}>
        <Box flexDirection="row" margin="2" padding="0" borderRadius="0">
        <TouchableOpacity 
        key={1}
        onPress={()=>{
            props.categoryFilter('all'),props.setActive(-1)
        }}
        >
        <Box style={[styles.center,{margin:5},
        props.active == -1 ? styles.active : styles.inactive
        ]}>
            <Text style={{color:'white'}}>All</Text>
        </Box>
        </TouchableOpacity>
        {props.categories.map((item)=>(
            <TouchableOpacity key={item._id} onPress={()=>{
                props.categoryFilter(item._id),
                props.setActive(props.categories.indexOf(item))
            }}>
                <Box style={[styles.center, { margin: 5 },
                    props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                ]}>
                    <Text style={{ color: 'white' }}>{item.name}</Text>
                </Box>
            </TouchableOpacity>
        ))}
        </Box>
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        backgroundColor:'green',
        borderRadius:5,
        padding:4
    },
    active:{
        backgroundColor:'#03bafc'
    },
    inactive:{
        backgroundColor:'#a0e1eb'
    }
});
