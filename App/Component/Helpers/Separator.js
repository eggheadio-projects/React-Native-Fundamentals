import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    height: 1,
    marginLeft: 15
  }
});

export default function Separator(props) {
  return (
    <View style={styles.separator} />
  )
}