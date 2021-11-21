import { Box, Text } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","" ],
    datasets: [
        {
            data: [500,122,600,1000,400,400,0]
        }
    ]
}
const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(4,8,28,${opacity})`,
    labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: "9",
        strokeWidth: "2",
        stroke: "#ffa726",
    },

}

const MonthlyTransactionBarChart = () => {
    return (
        <Box>
            <Text textAlign="center">Last 6 Months Transaction</Text>
            <BarChart
            style={styles.graphStyle}
            data={data}
            width={Dimensions.get("window").width}
            height={360}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            
            />
        </Box>
    )
}

export default MonthlyTransactionBarChart

const styles = StyleSheet.create({
    graphStyle: {
        marginVertical: 8,
        borderRadius: 5,
    }
})