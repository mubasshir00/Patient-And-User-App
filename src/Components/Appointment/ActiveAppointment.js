import {Box, Center, Text, Flex, Heading, Image} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActiveAppointment = ({activeApointment}) => {
  return (
    <Box p={3}>
      <Heading>Active</Heading>
      <Flex>
        {activeApointment.map(item => {
          const {
            id,
            doctorName,
            name,
            title,
            image,
            dateDay,
            date,
            day,
            time,
            active,
          } = item;
          return (
            <Box
              backgroundColor="white"
              my={2}
              key={id}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
              py={3}
              borderRadius={10}>
              
              {/* Doctor Image and Name */}
              <Box 
              alignItems='center' justifyContent="center">
                <Image
                  source={image}
                  resizeMode={'contain'}
                  alt="image"
                  size={35}
                  borderRadius={100}
                />
                <Text fontSize="10">{doctorName}</Text>
              </Box>

            {/* doctor name title and date */}
              <Box flexDirection="column">
                  
              <Box flexDirection="row" justifyContent="space-between">
                  <Box pb={3} color={'black'}>
                    <Heading fontSize={13}>{name}</Heading>
                    <Text fontSize={13}>{title}</Text>
                  </Box>

                  <Box background="blue.500" height="6" borderRadius="4">
                    <Text color="white" fontWeight="bold" px="2">
                      Tomorrow
                    </Text>
                  </Box>
              </Box>

                <Box flexDirection="row" 
                >
                  <Box flexDirection="row">
                    <Box pr={1}>
                      <Icon
                        name="calendar-o"
                        style={{ position: 'relative' }}
                        size={15}
                        color="black"
                      />
                    </Box>

                    <Text fontSize="11">On {date}</Text>
                  </Box>
                  <Box 
                  flexDirection="row" 
                  paddingLeft="3"
                  alignItems="center"
                  >
                    <Box pr={1}>
                      <Icon
                        name="clock-o"
                        style={{ position: 'relative' }}
                        size={15}
                        color="black"
                      />
                    </Box>
                    <Text color="black" fontSize="12">{day}</Text>
                    <Text color="black" fontSize="12">{time}</Text>
                  </Box>
                </Box>

              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ActiveAppointment;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
  },
});
