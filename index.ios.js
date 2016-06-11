/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var HomeView=require('./HomeView');
var ProView=require('./ProView');
var RecView=require('./RecView');

class juhui extends Component {
  render() {
    return (
      <ScrollableTabView>
         <HomeView tabLabel="聚会" />
         <ProView tabLabel="回忆" />
         <RecView tabLabel="地点" />
       </ScrollableTabView>
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

AppRegistry.registerComponent('juhui', () => juhui);
