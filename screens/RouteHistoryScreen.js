import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import { List, ListItem } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ListItemComponent from "../components/ListItemComponent";

export default function RouteHistoryScreen(){
    let obj = [1,2,3,4,5]
    return(
        <ScrollView>
            <View>
                <FlatList
                    data={obj}
            renderItem={({x}) => <ListItemComponent item={x}/>}
                />
            </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        backgroundColor:'white',
        
    }
})