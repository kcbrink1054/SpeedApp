import * as React from 'react';
import { Text, StyleSheet } from 'react-native';


export default class GraphComponent extends React.Component{

    render(){
        return(
            <Text style={style.graphContainer}>
                This will be my graph content
            </Text>
        )
    }
    
}
const style = StyleSheet.create({
    graphContainer:{
        textAlign:'center',
        color:'white'
    }
})