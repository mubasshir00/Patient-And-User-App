import {Box, Text, Image, ScrollView, Center} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View,TouchableOpacity} from 'react-native';
import {prescriptionData} from '../../assets/data/MedicalRecordsData/ConsultationData';
import Feather from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('screen');
// import FontAwesome from 'reac'
const PrescriptionScreen = () => {
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
      <TouchableOpacity style={styles.iconStyle}>
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
