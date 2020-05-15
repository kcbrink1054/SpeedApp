import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEff, useEffect} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { ListItem, Text } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { GetRouteDetailsById } from "../services/storage";

export default function RouteDetailsScreen({route, navigation}){
    const { results } = route.params
    const [routeDetails, setRouteDetails] = useState([])
    const [mounted, setMounted] = useState(true)
    
    useEffect(()=>{
        // let mounted = true
        if(mounted){
            GetRouteDetailsById(results.routeKey, setRouteDetails)
        }
        return () => setMounted(false);
    })

    

    
    navigation.setOptions({headerBackTitle:"Back", headerTitle:"Route Details"})
    return(
        <ScrollView style={{flex:1, flexDirection:"row"}}>
            <View style={styles.mapContainer}>
                <Text>This will be the maps component</Text>
            </View>
            <View style={styles.container}>
                {/* <Text  style={styles.container}>
                    {JSON.stringify(routeDetails)}
                </Text> */}
                <Text style={styles.font}>
                    Date: May 20, 2020
                </Text>
                <Text style={styles.font}>
                    City/State: Austin, Texas
                </Text>
                <Text style={styles.font}>
                    Duration: 5 Hours
                </Text>
                {/* <Text style={styles.font}>
                    Date: May 20, 2020
                </Text> */}
                <Text h4>
                    Select Time Range:
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mapContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"

    },
    container:{
        flex:1,
        // backgroundColor:
    },
    font:{
        fontSize:17,
        paddingBottom:30
    }
})