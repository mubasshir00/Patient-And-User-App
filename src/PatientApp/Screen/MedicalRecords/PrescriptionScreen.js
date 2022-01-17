import {Box, Text, Image, ScrollView, Center} from 'native-base';
import React, { useEffect, useState } from 'react';
import {Dimensions, StyleSheet, View,TouchableOpacity, Platform} from 'react-native';
import { prescriptionData } from './../../../assets/data/MedicalRecordsData/ConsultationData';
import Feather from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('screen');

import * as ImagePicker from 'react-native-image-picker'

// import FontAwesome from 'reac'
const PrescriptionScreen = () => {
  const [photo, setPhoto] = useState([])

 

  // const handleChoosePhoto = () =>{
  //   const options = {
  //     noData:true,
  //   };
  //   ImagePicker.launchImageLibrary(options,response=>{
  //     console.log('response',response);
  //     if(response.uri){
  //       setPhoto({response})
  //     }
  //   })
  // }

  const options = {
    title : 'Select',
    storageOptions:{
      skipBackup : true,
      path: 'images',
    }
  }


  const handleChoosePhoto = () =>{
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User Cancel');
      } else if (response.error) {
        console.log('Image Picker', response.error);
      } else {
        const uri = response.uri;
        setPhoto(uri)
      }
    })
  }

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibrary({
    //  mediaType:'photo',
    //  quality:1
    // })
    // if(!result.didCancel){
    //   setPhoto(result.assets);
    // }
  }



  return (
    <Box background="blue.100" flex={1}>
      <ScrollView background="blue.100">
        <Box
          flex="1"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          mt="2">
          {prescriptionData.map(item => {
            const {id, image, date} = item;
            return (
              <Box key={id} px="2">
                <Box>
                  <Image
                    source={image}
                    alt="i"
                    resizeMode={'cover'}
                    width={width / 2.5}
                    height={width / 2}
                  />
                  <Box>
                    <Text fontWeight="bold" textAlign="center" my="2">
                      {date}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </ScrollView>

      <TouchableOpacity
        onPress={() => handleChoosePhoto()}
      style={styles.iconStyle}>
        <Feather name="camera" size={50} color="black"/>
      </TouchableOpacity>

    </Box>
  );
};

export default PrescriptionScreen;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right:6,
    bottom:6,
  },
});
