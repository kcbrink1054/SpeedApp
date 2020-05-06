import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine,  VictoryTheme } from "victory-native";



export default function GraphComponent(props){

    return(
        <View style={style.graphContainer}>
            <VictoryChart width={350} height={300} theme={VictoryTheme.grayscale}
              animate={{duration:1000}}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "green"},
                        parent: { border: "20px solid #ccc"}
                    }}
                    data= {props.data}
                    interpolation="natural"
                />
                {/* <VictoryBar data={data} x="quarter" y="earnings" /> */}
            </VictoryChart>
        </View>
        
    )
}
const style = StyleSheet.create({
    graphContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})