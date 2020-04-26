import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { ListItem } from "react-native-elements";
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function RouteDetailsScreen({route, navigation}){
    const { results } = route.params
    // Alert.alert(JSON.stringify(id))
    return(
        <View>
            <Text>
                {JSON.stringify(results)}
            </Text>
        </View>
    )
}