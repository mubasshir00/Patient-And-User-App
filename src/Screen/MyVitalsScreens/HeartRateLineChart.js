import { Box, Text } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const minimumdata = {
    labels: ["Aug 1", "Aug 5", "Aug 10", "Aug 15", "Aug 20", "Aug 25", "Aug 30"],
    datasets: [
        {
            data: [
                23, 43, 12, 54, 54, 41, 11
            ]
        }
    ]
}

const maximumdata = {
    labels: ["Aug 1", "Aug 5", "Aug 10", "Aug 15", "Aug 20", "Aug 25", "Aug 30"],
    datasets: [
        {
            data: [
                23, 43, 12, 54, 54, 41, 11
            ]
        }
    ]
}

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

const HeartRateLineChart = () => {
    return (
        <Box>
            <LineChart
                data={minimumdata}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <Text textAlign="center">Minimum Heart Rate</Text>
            <LineChart
                data={maximumdata}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <Text textAlign="center">Maximum Heart Rate</Text>
        </Box>
    )
}

export default HeartRateLineChart

const styles = StyleSheet.create({})
