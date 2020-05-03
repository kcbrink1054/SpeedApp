import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import GraphComponent from "../components/GraphComponent";
import { MonoText } from '../components/StyledText';
import {GetAlert} from "../services/DbService";
import { SaveChanges } from "../services/DbService";

export default class HomeScreen extends React.Component {
  constructor(){
    super()
    SaveChanges({date:new Date().getDay()})
    const defaultValues = [
      { x: 0, y: 10 },
      { x: 1, y: 40 },
      { x: 2, y: 20 },
      { x: 3, y: 30 },
      { x: 4, y: 10 }
  ]
    
    this.state = {
      dataStorage: defaultValues,
      trackingData: defaultValues,
      startTracking: false,
      intervalId: 0,
      startDateTime:"",
      endDateTime:""
    }

  // setInterval(()=>{
  //     this.setState(state => {
  //         const data = [...state.data, {x: (state.data.length + 1), y: state.data[state.data.length-1].y+10}]
  //         return {
  //             data
  //         }
  //     })
  // }, 25)
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.twoFlexContainer}><Text>
          {JSON.stringify(this.state.trackingData)}
        </Text>
          <GraphComponent data={this.state.trackingData}/>
        </View>
        <View style={styles.oneFlexContainer}>
          <TouchableOpacity onPress={()=>this.StartTrackingSpeed()}>
            <Text style={{backgroundColor:'white', textAlign:'center',padding:15,fontSize:25, margin:30}}>
              {!this.state.startTracking ? "START" : "STOP"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  GetAccelerometerData(){
    return  {x: (this.state.dataStorage.length + 1), y: this.state.dataStorage[Math.floor(Math.random() * this.state.dataStorage.length)].y}
  }
  StartTrackingSpeed(){
    if (!this.state.startTracking) {
      const intervalId = setInterval(()=>{
        this.setState(state => {
            const dataStorage = [...state.dataStorage, this.GetAccelerometerData()]
            return {
              dataStorage,
              trackingData: state.dataStorage.slice(-5)
            }
        })
      }, 1000)
      this.setState(state=>{
        return{
          intervalId,
          startTracking: !state.startTracking,
          startDateTime: new Date().getDate()
          
        }
      })
    } else{
      clearInterval(this.state.intervalId)
      this.setState(state=>{
        return{
          intervalId: 0,
          startTracking: !state.startTracking
        }
      })
      //TODO Save the route to the database
    }
  
  }

}

HomeScreen.navigationOptions = {
  header: null,
};


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  twoFlexContainer:{
    flex:2,
    // backgroundColor:'#6e6d6a',
    justifyContent:'center'
  },
  oneFlexContainer:{
    flex:1,
    backgroundColor:'#42413e',
    justifyContent:'center'
  },
  helloStyles:{
    textAlign:'center',
    backgroundColor:'yellow'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
``