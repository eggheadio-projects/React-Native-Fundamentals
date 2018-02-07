import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

export default function RepoView(props) {
  return (
    <View style={styles.container}>
      <WebView source={{uri: props.url}} />
    </View>
  );
}

RepoView.propTypes = {
  url: PropTypes.string.isRequired
};
