import {Box, Center, Heading, ScrollView, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { bloodTestData } from './../../../assets/data/MyVitals/MyVitalsData';
import BloodTestBarChart from './BloodTestBarChart';

const BloodTestTable = ({ testName, result, normalValue}) => {
  return (
    <Box 
    flexDirection="row" 
    justifyContent="space-between"
    >
    <Box width="140" >
        {testName ? <Text fontSize={15} paddingLeft="2" textAlign="left" >{testName}</Text> : ''}
    </Box>
    <Box width="50"  >
        {result ? <Text fontSize={15} textAlign="left">{result}</Text> : ''}
    </Box>
    <Box width="100">
        {normalValue ?
        <Text fontSize={15}>{normalValue.lowest} to {normalValue.highest}</Text> : ''
              }
    </Box>
    </Box>
  );
};


const BloodTest = () => {
  return (
    <ScrollView background="blue.100">
      <Center py="5">
        <Heading>Blood Test</Heading>
      </Center>

      <BloodTestBarChart/>

      <Box>
        <Box mx="2" flexDirection="row" justifyContent="space-between">
          <Heading color="blue.500" paddingLeft="4" width="130" fontSize={15}>Test Name</Heading>
          <Heading color="blue.500" width="50" fontSize={15}>Result</Heading>
          <Heading color="blue.500" width="100" fontSize={15}>Normal Value</Heading>
        </Box>
        <Box my="2">
          {bloodTestData.map(item => {
            const {id, testName, result, normalValue} = item;
            return (
              <Box 
              mx="3" my="2" py="1"  key={id}
              borderBottom="black"
              borderBottomWidth="1"
              >
                <BloodTestTable
                  testName={testName}
                  result={result}
                  normalValue={normalValue}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default BloodTest;

const styles = StyleSheet.create({});
