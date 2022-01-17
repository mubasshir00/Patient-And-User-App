import {Box, Center, Heading, ScrollView, Text, Stack, Flex} from 'native-base';
import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { heartRateData } from './../../../assets/data/MyVitals/MyVitalsData';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component'
import HeartRateLineChart from './HeartRateLineChart';


const HeartRate = () => {
  const [tableHead, setTableHead] = useState(['Date','Minimum','Maximum','Average','Resting Avgerage','Active Average','Variability(ms)'])
  const [widthArr, setWidthArr] = useState([120, 120, 130, 130,130,130,130])
  return (
    <ScrollView background="info.100">
      <Center py="2">
        <Text color="black">1 Aug , 2021 - 30 Aug, 2021</Text>
        <Text>Minimum & Maximum Heart Rate</Text>
      </Center>

      <HeartRateLineChart/>


      <Box px="2">
       
        <ScrollView
        horizontal={true}
         >
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

            <Row widthArr={widthArr} data={tableHead}
              textStyle={styles.textHead}

            />
            <Rows widthArr={widthArr} data={heartRateData}
              textStyle={styles.text}
            />

          </Table>
        </ScrollView>
      </Box>
    </ScrollView>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    // backgroundColor:'#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  textHead: {
    margin: 6,
    fontWeight: 'bold',
    color: '#4287f5',
    fontSize:14,
  },
  text: {
    margin: 6,
    color: 'black',
    fontWeight:'bold'
  }
});
