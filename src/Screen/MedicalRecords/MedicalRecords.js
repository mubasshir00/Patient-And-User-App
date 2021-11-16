import { useNavigation } from '@react-navigation/native';
import {Box, Button, Center, Flex, Image, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {medicalRecords} from '../../assets/data/medicalRecordsData';
// import { medicalRecords } from '../../assets/data/medicalRecordsData'

const newContent = (
  <Box background="blue.500" py="0.3" px="1.5">
    <Text style={{color: 'white', fontSize: 12, borderRadius: 20}}>new</Text>
  </Box>
);

const MedicalRecords = () => {
  const navigation = useNavigation();
  const [recordData, setRecordData] = useState([]);
  useEffect(() => {
    setRecordData(medicalRecords);
    return () => {
      setRecordData([]);
    };
  }, []);
  // console.log(recordData);
  return (
    <Center my="2">
      <Box width="90%" justifyContent="space-between">
        <Box>
          {recordData.map(item => {
            const {id, image, name,title, count, isNew} = item;
            return (
            <Pressable key={id} my="2"
            onPress={() => navigation.navigate({name})}
              >
                {({isHovered, isFocused, isPressed}) => {
                  return (
                    <Flex
                      key={id}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      bg={isPressed ? 'white' : isHovered ? 'blue.100' : 'blue.100'}
                        py="1" px="2"
                        borderRadius="10"
                      >
                      <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Box>
                          <Image
                            source={image}
                            alt={title}
                            style={styles.imageContainer}
                            mr="4"
                          />
                        </Box>
                        <Box my="2">
                          <Text style={{color: 'black', fontWeight: 'bold'}}>
                            {title}
                          </Text>
                          <Text>{count} items</Text>
                        </Box>
                      </Box>
                      <Box>{isNew && <Box> {newContent} </Box>}</Box>
                    </Flex>
                  );
                }}
              </Pressable>
            );
          })}
        </Box>
      </Box>
    </Center>
  );
};

export default MedicalRecords;

const styles = StyleSheet.create({
  imageContainer: {
    width: 30,
    height: 30,
  },
});
