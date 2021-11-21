import {useNavigation} from '@react-navigation/native';
import {Box, Heading, Pressable,Text,Image} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

//DoctorList data comes from SpecialistScreen
const DoctorList = ({
  name,
  title,
  cost,
  image,
  rating,
  detailsAddress,
  patients,
  experience,
  time,
  timeZone,
  fee,
  speciality,
  registration,
  medicalExperience,
  schedule,
}) => {
  const ratingAv = Math.round((5 + rating - 5) / 11);

  const navigation = useNavigation();
  // console.log(image);
  return (
    <Pressable
      my="2.5"
      borderRadius="2"
      onPress={() =>
        navigation.navigate('Details', {
          name: name,
          title: title,
          image:image,
          cost: cost,
          rating: rating,
          detailsAddress: detailsAddress,
          patients: patients,
          experience: experience,
          time: time,
          timeZone: timeZone,
          fee: fee,
          speciality: speciality,
          registration: registration,
          medicalExperience: medicalExperience,
          schedule: schedule,
        })
      }>
      {({isHovered, isFocused, isPressed}) => {
        return (
          <Box
            bg={isPressed ? 'blue.100' : isHovered ? 'cyan.800' : 'white'}
            px="2"
            py="3"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="5"
            >
            <Box>
              <Image 
              source={{uri:image}}
                alt="Image"
                size={10}
                borderRadius="100"
                />
            </Box>
            <Box>
              <Heading fontSize={15}>{name}</Heading>
              <Text fontSize={13}>{title}</Text>
            </Box>
            <Box>
              <Text textAlign="center">{cost} $</Text>
              {/* <Text>{rating}</Text> */}
              <Box flexDirection="row">
                <Box flexDirection="row">
                  {Array(ratingAv)
                    .fill()
                    .map((_, i) => (
                      <Box key={i}>
                        <Icon name="star" color="orange" />
                      </Box>
                    ))}
                </Box>
                <Box flexDirection="row">
                  {Array(5 - ratingAv)
                    .fill()
                    .map((_, i) => (
                      <Box key={i}>
                        <Icon name="staro" />
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default DoctorList;

const styles = StyleSheet.create({});
