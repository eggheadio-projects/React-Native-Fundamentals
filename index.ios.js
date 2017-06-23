/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Main from './App/Component/Main';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});


export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Github Notetaker'
        }}
        style={styles.container}
      />
    );
  }
}


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
