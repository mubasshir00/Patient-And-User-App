import { Box,Center,Heading,ScrollView,SimpleGrid,Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {Table,TableWrapper,Row,Cell,Rows} from 'react-native-table-component'
import { transactionHistoryData } from './../../../assets/data/TransactionHistory/TransactionHistoryData'
import MonthlyTransactionBarChart from './MonthlyTransactionBarChart'



const TransactionScreen = () => {
    const [tableHead, setTableHead] = useState(['Doctor Name', 'Total Payment', 'Payment Method','Payment Status'])

    const [widthArr, setWidthArr] = useState([120,120,130,130])



    return (
        <ScrollView background="blue.100" flex={1} py="3">
            <Center>
                <Box>
                    <Text>Balance : <Text fontWeight="bold" color="blue.500">BDT 500</Text> </Text>
                </Box>
            </Center>
            {/* <MonthlyTransactionBarChart/> */}
            <Box px="5" py="2">
                <ScrollView horizontal={true}>
                    <Table borderStyle={{borderWidth:2,borderColor:'#c8e1ff'}}>
                        <Row widthArr={widthArr} data={tableHead}
                        textStyle={styles.textHead}
                        
                        />
                        <Rows widthArr={widthArr} data={transactionHistoryData}
                        textStyle={styles.text}
                        />
                    </Table>
                </ScrollView>
            </Box>
        </ScrollView>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        paddingTop:30,
        // backgroundColor:'#fff'
    },
    head:{
        height:40,
        backgroundColor:'#f1f8ff'
    },
    textHead:{
        margin:6,
        fontWeight:'bold',
        color:'#4287f5'
    },
    text:{
        margin:6,
        color:'black'
    }
})
