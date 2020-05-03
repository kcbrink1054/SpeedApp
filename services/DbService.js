import { Alert } from 'react-native';
import { openDatabase } from "expo-sqlite";

const DATABASE_NAME = "test1"

export function InitializeDatabase(){
    
    const db = openDatabase(DATABASE_NAME)
    
    db.transaction(x =>{
        x.executeSql(
            "CREATE TABLE if not exists FirstTable (id integer primary key not null,name text, age int);",
            []
        );
    
        x.executeSql(
            "SELECT * from FirstTable where name = ?",
            ["Kalan Brinkley"],
            (_, {rows: {_array} })=>DisplayData(_array),
            () => Alert.alert("error")
        )
    })    
}


export function GetRouteHistory(callback){
    const db = openDatabase(DATABASE_NAME)

    db.transaction(x =>{
        x.executeSql(
            "SELECT * from FirstTable",
            [],
            (_, {rows: {_array} })=>callback(_array),
            () => Alert.alert("error")
        )
    })
}
export function SaveChanges(data){
    Alert.alert(JSON.stringify(data))
}