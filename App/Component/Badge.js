import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#48BBEC',
        paddingBottom: 10
    },
    name: {
        alignSelf: 'center',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: 'white'
    },
    handle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: 'center'
    }
});


export default function Badge(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: props.userInfo.avatar_url}}
      />
      <Text style={styles.name}> {props.userInfo.name} </Text>
      <Text style={styles.handle}> {props.userInfo.login} </Text>
    </View>
  )
}

Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
};