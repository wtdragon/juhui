/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid,
  ToastAndroid
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');
var _navigator;
BackAndroid.addEventListener('hardwareBackPress',function(){
  if(_navigator&&_navigator.getCurrentRoutes().length > 1){
    _navigator.pop();
    return true;
  }
  return false;
})
class SplashCreen extends Component {
  RouteMapper(route,navigationOperations,onComponentRef){
    _navigator = navigationOperations;
    if(route.name==='home'){
      return (
        <View style={styles.container}>
        the fist page;
        </View>
      );
    }else if (route.name==='story'){
      return(
        <View style={styles.container}>
        the story page
        </View>
      );
    }
  }
  getInitialState(){
    return {
      splashed:false
    };
  }
  render() {
    return(
      <SplashScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = SplashCreen;
