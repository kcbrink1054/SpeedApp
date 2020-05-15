import { AsyncStorage, Alert } from "react-native";
import moment from "moment";

const ROUTE_HISTORY = 'RouteHistory'
const ROUTE_DETAILS = 'RouteDetails'
const SAMPLE_DATA = "Sample"

export async function GetRouteHistory(callback){
    let x;
    await AsyncStorage.getItem(ROUTE_HISTORY,(error, result) =>{
        callback(JSON.parse(result))
    })
    // Alert.alert(JSON.stringify(x))
    
}

export async function GetRouteDetailsById(id, callback){
    await AsyncStorage.getItem(ROUTE_DETAILS,(error, result) =>{
        callback(JSON.parse(result).filter(x => x.routeKey === id))
    })
}
function ConvertToString(data){
    return JSON.stringify(data)
}

export function SetDefaultRouteDetailsData(){
    AsyncStorage.setItem(ROUTE_DETAILS,ConvertToString(routeDetailsData))
}
export function SetDefaultRouteHistoryData(){
    AsyncStorage.setItem(ROUTE_HISTORY,ConvertToString(routeHistoryData))
}

export function SetDefaultData(){
    AsyncStorage.setItem(SAMPLE_DATA,ConvertToString({
        name:"Kalan",
        age:25
    }))
}

export function GetDefaultData(){
    try {
        AsyncStorage.getItem(SAMPLE_DATA, (error, result) => {
            return JSON.parse(result)
        })    
    } catch (error) {
        
    }   
}


const routeHistoryData = [
    {
        routeKey:1,
        createdDate: moment().format("MMM Do YY"),
        duration:"8 Hours",
        city:"Austin",
        state: "Texas",
        protected: "False"
    },
    {
        routeKey:2,
        createdDate: moment().format("MMM Do YY"),
        duration:"12 Hours",
        city:"Charlotte",
        state: "North Carolina",
        protected: "False"
    },
    {
        routeKey:3,
        createdDate: moment().format("MMM Do YY"),
        duration:"2 Hours",
        city:"Tampa",
        state: "Florida",
        protected: "False"
    }
]

const routeDetailsData = [
    {
        routeKey:1,
        speed:40,
        time: "1:30:00",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:45,
        time: "1:30:01",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:48,
        time: "1:30:02",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:50,
        time: "1:30:03",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:55,
        time: "1:30:04",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:50,
        time: "1:30:05",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:1,
        speed:55,
        time: "1:30:06",
        lat:"000",
        lat:"001",
        currentMile:1
    },{
        routeKey:2,
        speed:40,
        time: "1:30:00",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:2,
        speed:45,
        time: "1:30:01",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:2,
        speed:48,
        time: "1:30:02",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:2,
        speed:50,
        time: "1:30:03",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:3,
        speed:45,
        time: "1:30:01",
        lat:"000",
        lat:"001",
        currentMile:1
    },
	{
        routeKey:3,
        speed:48,
        time: "1:30:02",
        lat:"000",
        lat:"001",
        currentMile:1
    }
]