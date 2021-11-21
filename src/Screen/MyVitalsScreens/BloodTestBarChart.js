import { Box,Text } from 'native-base'
import React from 'react'
import { StyleSheet, View,Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const data ={
    labels:["WBC","Neutrophils(%)","Lymphocytes(%)","Monocytes(%)","Eosinophils(%)","Basophils(%)","RBCs","Hb(g/dL)","Hematocrit(%)","Platelets"],
    datasets:[
        {
            data:[8,62,26,10,1,3.84,11.7,37.262]
        }
    ]
}

const chartConfig={
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

const BloodTestBarChart = () => {
    return (
        <Box marginRight="2">
            <BarChart
            style={styles.graphStyle}
            data={data}
            width={Dimensions.get("window").width}
            height={360}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            bezier
            yAxisInterval=""
            yAxisSuffix="%"
            yAxisInterval={1}
            />
        </Box>
    )
}

export default BloodTestBarChart

const styles = StyleSheet.create({
    graphStyle:{
        marginVertical: 8,
        borderRadius: 5,
    }
})
