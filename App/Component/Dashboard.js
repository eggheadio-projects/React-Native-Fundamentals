import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import Profile from './Profile';
import Repositories from './Repositories';
import { api } from '../Utils/api';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }
  goToProfile() {
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title: 'Repositories Page',
          component: Repositories,
          passProps: { userInfo: this.props.userInfo, repos: res }
        });
      });
  }
  goToNotes() {
    console.log('Go to notes');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.userInfo.avatar_url}}
          style={styles.image}
        />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    )
  }
}