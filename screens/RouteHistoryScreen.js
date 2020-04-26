import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React, {useState} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ListItem } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { openDatabase } from "expo-sqlite";

export default function RouteHistoryScreen({navigation}){
    const [results,setResults] = useState([])

    GetRouteHistory(setResults)

    return(
        <ScrollView>
            {
                results.map((x,i)=>(
                    <ListItem
                        key={x.id}
                        title={x.name}
                        subtitle={x.age}
                        bottomDivider
                        onPress={()=>DisplayRouteDetails(x, navigation)}
                    />
    ))
            }
        </ScrollView>
    )
}

function GetRouteHistory(callback){
    const db = openDatabase("test1")

    db.transaction(x =>{
        x.executeSql(
            "SELECT * from FirstTable",
            [],
            (_, {rows: {_array} })=>callback(_array),
            () => Alert.alert("error")
        )
    })
}
function DisplayRouteDetails(data, navigation){
    navigation.navigate("RouteDetails", {results: data})
}


function CreateDatabase(){
    const db = openDatabase("test1")
    
    db.transaction(x =>{
        x.executeSql(
            "CREATE TABLE if not exists FirstTable (id integer primary key not null,name text, age int);",
            []
        );
        // x.executeSql(
        //     "INSERT INTO FirstTable (name, age) values (?,?)",
        //     ['Ken Ken', 40]

        // );
        x.executeSql(
            "SELECT * from FirstTable where name = ?",
            ["Kalan Brinkley"],
            (_, {rows: {_array} })=>DisplayData(_array),
            () => Alert.alert("error")
        )
    })

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        backgroundColor:'white',
        
    }
})