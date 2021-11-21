import {Box, Center, Heading, ScrollView, Image, Text, Flex} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import PressableComponent from '../../../ReusableComponents/PressableComponents/PressableComponent';

const {width, height} = Dimensions.get('screen');
const Profile = ({
  id,
  name,
  image,
  bloodgroup,
  userHeight,
  weight,
  BMI,
  bloodPress,
  oxygenSaturation,
  latestedUpdate,
    heartRate,
}) => {
  return (
    <Center mx="2">
      {/* <Box>
        <Center>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/44/00/9e/44009edaece2cef6daa7ee348e11761d.jpg',
            }}
            alt="hh"
            style={styles.image}
          />
        </Center>
      </Box> */}

      {/* <Box>
        <Center>
          <Text fontWeight="bold" fontSize="17">
            {name}
          </Text>
        </Center>
      </Box> */}

      <Center
        flex="1"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="flex-start">
        <PressableComponent
          width={width / 2.2}
          rounded={5}
          bgPressed="#5099F3"
          my="0.5"
          mx="0.5"
          
          navigationName="Blood Test">
          <Box height={height / 6} flexDirection="column">
            <Box alignItems="center">
              <Text color="white" fontWeight="bold" py="0">
                Blood Group
              </Text>
              <Text color="white" fontSize="25" fontWeight="bold">
                {bloodgroup}
              </Text>
            </Box>
            <Box flexDirection="column"  alignItems="center" paddingBottom="2">
              <Text color="white">Pressure </Text>
              <Text color="white" fontSize="21" >
                {bloodPress}
              </Text>
            </Box>
          </Box>
        </PressableComponent>

        <PressableComponent
          width={width / 2.2}
          rounded={5}
          bgPressed="#5099F3"
          my="0.5"
          mx="0.5"
          navigationName="BMI">
          <Box
            alignItems="center"
            height={height / 6}
            px="2"
            flexDirection="column"
            justifyContent="space-between">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              width="100%">
              <Box flexDirection="column" alignItems="center">
                <Box flexDirection="row" alignItems="center">
                  <Text color="white" fontWeight="bold">
                    BMI
                  </Text>
                  <Text
                    color="black"
                    fontSize="35"
                    fontWeight="bold"
                    color="white"
                    mx="1">
                    {BMI}
                  </Text>
                </Box>
              </Box>
              <Box flexDirection="column">
                <Flex flexDirection="row" alignItems="center">
                  <Text color="white" fontSize="12" fontWeight="bold">
                    Height
                  </Text>
                  <Text paddingLeft="1" fontSize="21" color="white">
                    {userHeight}
                  </Text>
                </Flex>
                <Flex flexDirection="row" alignItems="center">
                  <Text color="white" fontSize="12" fontWeight="bold">
                    Weight
                  </Text>
                  <Text paddingLeft="1" fontSize="21" color="white">
                    {weight}
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Text color="blue.100" fontSize="11">
                Last Update :{' '}
              </Text>
              <Text color="white">{latestedUpdate}</Text>
            </Box>
          </Box>
        </PressableComponent>

        <PressableComponent
          width={width / 2.2}
          rounded={5}
          bgPressed="#5099F3"
          my="0.5"
          mx="0.5"
          navigationName="Oxygen Saturation">
          <Box
            alignItems="center"
            height={height / 6}
            px="1"
            flexDirection="column"
            justifyContent="space-between">
            <Text color="white" fontWeight="bold">
              Oxygen Saturation
            </Text>

            <Box flexDirection="row" justifyContent="space-between" width="90%">
              <Box>
                <Text fontSize="12" fontWeight="bold" color="white">
                  PR (bpm)
                </Text>
                <Text fontSize="25" fontWeight="bold" color="white">
                  {oxygenSaturation?.PR}
                </Text>
              </Box>
              <Box>
                <Text fontSize="12" fontWeight="bold" color="white">
                  SpO2%
                </Text>
                <Text fontSize="25" fontWeight="bold" color="white">
                  {oxygenSaturation?.spo2}
                </Text>
              </Box>
            </Box>

            <Box
              flexDirection="row"
              width="100%"
              justifyContent="space-between">
              <Text color="white">{oxygenSaturation?.satLastUpdateDate}</Text>
              <Text color="white">{oxygenSaturation?.satLastUpdateTime}</Text>
            </Box>
          </Box>
        </PressableComponent>

        <PressableComponent
          width={width / 2.2}
          rounded={5}
          bgPressed="#5099F3"
          my="0.5"
          mx="0.5"
          navigationName="Heart Rate"
          >
          <Box alignItems="center" py="2" height={height / 6}>
            <Box flexDirection="row">
                <Text color="white" fontSize="25" fontWeight="bold">{heartRate?.minimum}</Text>
                <Text color="white" fontSize="25" fontWeight="bold">/{heartRate?.maximum}</Text>
            </Box>
            <Text color="white">Average Heart Rate</Text>
            <Text color="white">Base on Last 7 Days</Text>
          </Box>
        </PressableComponent>
      </Center>
    </Center>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
});
