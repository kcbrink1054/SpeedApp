import { Alert } from 'react-native';
import { openDatabase } from "expo-sqlite";

const DATABASE_NAME_TEST = "test1"
const DATABASE_NAME = "SpeedDataBase"

export function InitializeDatabase(){
    
    const db = openDatabase(DATABASE_NAME)
    
    db.transaction(x =>{
        // x.executeSql(
        //     "CREATE TABLE if not exists RouteHistory (routeHistoryId integer primary key not null,createdDate text, city text,state text, isProtected int);",
        //     []  
        // );
        
        // x.executeSql(
        //     "CREATE TABLE if not exists RouteDetails (routeDetailsId integer primary key not null,routeHistoryId integer, FOREIGN KEY(routeHistoryId) REFERENCES RouteHistory(routeHistoryId),mph text, time text, latitude text, longitude text);",
        //     [],
        //     null,
        //     (error) => Alert.alert(JSON.stringify(error))
        // );
        // x.executeSql(
        //     "SELECT * from FirstTable",
        //     [],
        //     (_, {rows: {_array} })=>Alert.alert("testing2"),
        //     (error) => Alert.alert(JSON.stringify(error))
        // )
        x.executeSql(
            "SELECT * from sqlite_master where type='table'",
            // "select count(*) from RouteHistory",
            [],
            (_, {rows: {_array} })=>Alert.alert(JSON.stringify(_array)),
            (error) => Alert.alert(JSON.stringify(error))
        )
        // x.executeSql(
        //     "SELECT * from FirstTable where name = ?",
        //     ["Kalan Brinkley"],
        //     (_, {rows: {_array} })=>Alert.alert("testing"),
        //     () => Alert.alert("error")
        // )
    })
    db.transaction(x =>{
        // x.executeSql(
        //     "CREATE TABLE if not exists RouteHistory (routeHistoryId integer primary key not null,createdDate text, city text,state text, isProtected int);",
        //     []  
        // );
        
        // x.executeSql(
        //     "CREATE TABLE if not exists RouteDetails (routeDetailsId integer primary key not null,routeHistoryId integer, FOREIGN KEY(routeHistoryId) REFERENCES RouteHistory(routeHistoryId),mph text, time text, latitude text, longitude text);",
        //     []
        // );
        
        // x.executeSql(
        //     "SELECT * from FirstTable where name = ?",
        //     ["Kalan Brinkley"],
        //     (_, {rows: {_array} })=>Alert.alert("testing23"),
        //     () => Alert.alert("error")
        // )
    })
}


export function InsertDefaultData(){
    const db = openDatabase(DATABASE_NAME)

    db.transaction(x=>{
        x.executeSql(
            "insert into RouteHistory (createdDate, city, state, isProtected) values (?, ?, ?, ?)",
            ["Monday May 4 2020", "Austin", "Tx", 0]
          );

        x.executeSql(
            "insert into RouteHistory (createdDate, city, state, isProtected) values (?, ?, ?, ?)",
            ["Monday May 6 2020", "Charlotte", "NC", 0]
        );

        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [1, 40,"1:30:00", "35.161491", "-80.922897"]

        );

        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [1, 45,"1:31:01", "35.161491", "-80.922897"]

        );
        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [1, 50,"1:31:02", "35.161491", "-80.922897"]

        );
        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [1, 55,"1:31:03", "35.161491", "-80.922897"]

        );
        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [2, 40,"1:30:00", "35.161491", "-80.922897"]

        );

        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [2, 45,"1:31:01", "35.161491", "-80.922897"]

        );
        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [2, 50,"1:31:02", "35.161491", "-80.922897"]

        );
        x.executeSql(
            "insert into RouteDetails (routeHistoryId, mph,time ,latitude,longitude) values (?, ?, ?, ?, ?)",
            [2, 55,"1:31:03", "35.161491", "-80.922897"]

        );

    })
}

export function GetRouteHistory(callback){
    // const db = openDatabase(DATABASE_NAME)

    // db.transaction(x =>{
    //     x.executeSql(
    //         "SELECT * from RouteHistory",
    //         [],
    //         (_, {rows: {_array, length} })=>qwe(_array),
    //         (error) => Alert.alert(JSON.stringify(error))
    //     )
    // }, )
}
export function qwe(data){
    Alert.alert(JSON.stringify(data))
}

export function SaveChanges(data){
    Alert.alert(JSON.stringify(data))
}

const CREATE_ROUTE_HISTORY_TABLE = "CREATE TABLE if not exists RouteHistory (routeHistoryId integer primary key not null,createdDate text, city text,state text, isProtected int);"
const CREATE_ROUTE_DETAILS_TABLE = "CREATE TABLE if not exists RouteDetails (routeDetailsId integer primary key not null,routeHistoryId integer, FOREIGN KEY(routeHistoryId) REFERENCES RouteHistory(routeHistoryId),mph text, time text, latitude text, longitude text);"