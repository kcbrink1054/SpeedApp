import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React, {useState} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ListItem } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { openDatabase } from "expo-sqlite";
import { GetRouteHistory, GetRouteDetailsById } from "../services/storage";

export default function RouteHistoryScreen({navigation}){
    const [routeHistory,setRouteHistory] = useState([])
    const [routeDetails,setRouteDetails] = useState([])
    
    GetRouteHistory(setRouteHistory)


    // Alert.alert(JSON.stringify(x))
    return(
        <ScrollView>
            {
                routeHistory.map((x,i)=>(
                    <ListItem
                        key={x.routeKey}
                        title={x.createdDate}
                        subtitle={x.city}
                        bottomDivider
                        onPress={()=>DisplayRouteDetails(x, navigation)}
                    />
                ))
            }
        </ScrollView>
    )
}

// function GetRouteHistory(callback){
//     const db = openDatabase("test1")

//     db.transaction(x =>{
//         x.executeSql(
//             "SELECT * from FirstTable",
//             [],
//             (_, {rows: {_array} })=>callback(_array),
//             () => Alert.alert("error")
//         )
//     })
// }
function DisplayRouteDetails(data, navigation){
    // let d = GetRouteDetailsById(data.routeKey, callback)
    // Alert.alert(routeDetails)
    navigation.navigate("RouteDetails", {results: data})
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        backgroundColor:'white',
        
    }
})