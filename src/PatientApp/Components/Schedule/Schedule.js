import {useNavigation} from '@react-navigation/native';
import {Box, Heading, ScrollView, Text, Pressable, Center} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import ProfileCard from './../../ReusableComponents/ProfileCard/ProfileCard';

import Calender from './Calender';

const {width, height} = Dimensions.get('window');

//props come from SingleSpecialist file
const Schedule = props => {
  const [selectedTime, setSelectedTime] = useState('')

  const navigation = useNavigation();

  const selectTime = (e) =>{
    setSelectedTime('');
    setSelectedTime(e)
  }

  console.log(selectedTime);

  return (
    <ScrollView background="white">
      {
        props.bookDoctors.map(x => {
          const {
            name: name,
            detailsAddress: detailsAddress,
            image: image,
            schedule: schedule,
          } = { ...x.doctor }

          // console.log(schedule?.Morning);
          return (

            <Box key={name * Math.rand}>
              <Box background="#F0F4F7" px="2" py="2.5" m="4" borderRadius="10">

                <ProfileCard  name={name} detailsAddress={detailsAddress} image={image} />

              </Box>
              <Calender selectedTime={selectedTime}/>
              <Box py="2" px="4">
                <Heading py="2">Morning</Heading>
                <Box>
                  <Box flexDirection="row" justifyContent="space-between" my="1">
                    {schedule?.Morning.slice(3).map(item => {
                      return (
                        <Pressable key={item.id}
                          onPress={() => {
                            selectTime(item.morningTime);
                          }}
                        >
                          {({ isHovered, isFocused, isPressed }) => {
                            return (
                              <Box
                                bg={
                                  isPressed ? '#5099F3' : isHovered ? '#5099F3' : ''
                                }
                                borderColor="black"
                                borderWidth="1"
                                alignItems="center"
                                borderRadius="10"
                                // px="4"
                                py="1.5"
                                width={width / 3.5}>
                                <Text>{item.morningTime}</Text>
                              </Box>
                            );
                          }}
                        </Pressable>
                      );
                    })}
                  </Box>
                  <Box flexDirection="row" justifyContent="space-between" mt="2">
                    {schedule?.Morning.slice(-3).map(item => {
                      return (
                        <Pressable key={item.id}
                          onPress={() => {
                            selectTime(item.morningTime);
                          }}
                        >
                          {({ isHovered, isFocused, isPressed }) => {
                            return (
                              <Box
                                bg={
                                  isPressed ? '#5099F3' : isHovered ? '#5099F3' : ''
                                }
                                borderColor="black"
                                borderWidth="1"
                                alignItems="center"
                                borderRadius="10"
                                // px="4"
                                py="1.5"
                                width={width / 3.5}>
                                <Text>{item.morningTime}</Text>
                              </Box>
                            );
                          }}
                        </Pressable>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
              <Box py="2" px="4">
                <Heading py="2">Evening</Heading>
                <Box>
                  <Box flexDirection="row" justifyContent="space-between" my="1">
                    {schedule?.Evening.slice(3).map(item => {
                      return (
                        <Pressable key={item.id}
                          onPress={() => {
                            selectTime(item.eveningTime);
                          }}
                        >
                          {({ isHovered, isFocused, isPressed }) => {
                            return (
                              <Box
                                bg={
                                  isPressed ? '#5099F3' : isHovered ? '#5099F3' : ''
                                }
                                borderColor="black"
                                borderWidth="1"
                                alignItems="center"
                                borderRadius="10"
                                // px="4"
                                py="1.5"
                                width={width / 3.5}>
                                <Text>{item.eveningTime}</Text>
                              </Box>
                            );
                          }}
                        </Pressable>
                      );
                    })}
                  </Box>
                  <Box flexDirection="row" justifyContent="space-between" mt="2">
                    {schedule?.Evening.slice(-3).map(item => {
                      return (
                        <Pressable key={item.id} 
                        onPress={()=>{
                          selectTime(item.eveningTime);
                        }}
                        >
                          {({ isHovered, isFocused, isPressed }) => {
                            return (
                              <Box
                                bg={
                                  isPressed ? '#5099F3' : isHovered ? '#5099F3' : ''
                                }
                                borderColor="black"
                                borderWidth="1"
                                alignItems="center"
                                borderRadius="10"
                                // px="4"
                                py="1.5"
                                width={width / 3.5}>
                                <Text>{item.eveningTime}</Text>
                              </Box>
                            );
                          }}
                        </Pressable>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
              <Pressable
                //navigation to summery screen
                onPress={() => {
                  navigation.navigate('Summery');
                }}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={isPressed ? 'blue.400' : isHovered ? 'blue.300' : '#5099F3'}
                      py="2"
                      mx="4"
                      my="2"
                      rounded="8"
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.95 : 1,
                          },
                        ],
                      }}>
                      <Center>
                        <Text color="white" fontWeight="bold" fontSize="16">
                          Confirm
                        </Text>
                      </Center>
                    </Box>
                  );
                }}
              </Pressable>
          </Box>

          )
        })
      }
    </ScrollView>
  );
};

const mapStateToProps = state =>{
  const { bookDoctors } = state
  return {
    bookDoctors: bookDoctors,
  }
}

export default connect(mapStateToProps, null)(Schedule);

const styles = StyleSheet.create({});
