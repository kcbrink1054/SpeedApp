import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { ListItem } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function RouteHistoryScreen({navigation}){
    let obj = ["1","2","3","4","5"]
    let t = 1
    return(
        <ScrollView>
            {
                obj.map((x,i)=>(
                    <ListItem
                        key={x}
                        title="test"
                        subtitle={x}
                        bottomDivider
                        // onPress={()=>RowPressed(x)}
                        onPress={()=>navigation.navigate("RouteDetails")}
                    />
    ))
            }
        </ScrollView>
            
    )
}
function RowPressed(id){
    Alert.alert(id)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        backgroundColor:'white',
        
    }
})