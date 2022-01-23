import { Dimensions, ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, Container, Image,Text } from 'native-base';
import TrafficLight from '../../Shared/TrafficeLight';
import EasyButton from '../../Shared/EasyButton';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { connect } from 'react-redux';
// import * as actions from ''

const {width,height} = Dimensions.get('window')

const SingleProducts = (props) => {

  const [item,setItem] = useState(props.route.params.item)
  const [availability, setAvailability] = useState("")
  const [availabilityText, setAvailabilityText] = useState("")

  useEffect(()=>{
      if(props.route.params.item.countInStock == 0){
        setAvailability(<TrafficLight unavailable></TrafficLight>)
        setAvailabilityText("Unavailable")
      } else if(props.route.params.item.countInStock <=5){
          setAvailability(<TrafficLight limited></TrafficLight>)
          setAvailabilityText("Limited")
      } else {
          setAvailability(<TrafficLight available></TrafficLight>)
          setAvailabilityText("Available")
      }

      return () =>{
          setAvailability(null);
          setAvailabilityText("");
      }
  },[])

  return (
    <Box flex={1} style={styles.container}>
        <ScrollView>

        <Box backgroundColor="blue.50">
        <Image 
        source={{
        uri: item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
        }}
        resizeMode="contain"
        style={styles.image}
        alt={item.name}
        />
        </Box>

        <Box style={styles.contentContainer}>
            <Box width={width/1.5}>
                <Text marginY="0.5" style={styles.contentHeader}>{item.name}</Text>
                <Text marginY="0.5" style={styles.contentText}>{item.brand}</Text>
                <Text marginY="0.5" color="blueGray.500">{item.description}</Text>
            </Box>
            <Box>
            <Box style={styles.availabilityContainer}>
                <Box style={styles.availability}>
                <Text color="blueGray.500" style={{ marginRight: 5, fontSize: 14 }}>
                <Text color="black" fontWeight="bold">{availabilityText}</Text>
                    </Text>
                        {availability}
                     </Box>

                    </Box>
             <Text style={styles.price}>$ {item.price}</Text>
            </Box>
        </Box>


        </ScrollView>
        {/* <View styles={styles.bottomContainer}>
            <View>
            
            </View>
            <Box>
            <EasyButton primary medium 
            // onPress={()=>props.add}
            >
                <Text>Add</Text>
            </EasyButton>
            </Box>
        </View> */}
        <Box width={width} justifyContent="center" alignItems="center">
              <Box background="green.500" width={width/3}>
                  <TouchableOpacity justifyContent="center" alignItems="center" >
                      <Text fontSize="21"  fontWeight="bold" color="white" textAlign="center">Add</Text>
                  </TouchableOpacity>
              </Box>
        </Box>
    </Box>
  );
};

export default SingleProducts;

const styles = StyleSheet.create({
    container:{
        position:'relative',
        // height:'100%'
        backgroundColor:'white'
    },
    imageContainer:{
        backgroundColor:'white',
        padding:0,
        margin:0
    },
    image:{
        width:width,
        height:width/1.3
    },
    contentContainer:{
        marginTop:20,
        justifyContent:'center',
        // alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    contentHeader:{
        fontWeight:'bold',
        fontSize:20,

        // marginBottom:20
    },
    contentText:{
        fontSize:14,
        fontWeight:'bold',
        marginBottom:2,
        color:'grey'
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        // right:50,
        left:50,
        
        backgroundColor:'red'
    },
    price:{
        // fontSize:24,
        color:'black',
        fontSize:18,
        fontWeight:'500'
    },
    availabilityContainer:{
        alignItems:'center'
    },
    availability:{
        flexDirection:'row',
        marginBottom:1
    }
});
