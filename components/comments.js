import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {/* {avatar && ( */}
          <Image
            resizeMode="contain"
            style={styles.avatar}
            source={require('../assets/sankara.jpeg')}
          />
          {/* )} */}
        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={[styles.text, styles.name]}>Ruiru</Text>{' '}
          </Text>
          <Text style={styles.text}>i was there as it all happended i saw it man it was sick af</Text>
          <Text style={[styles.text, styles.created]}>
            {/* {moment().fromNow()} */}
            saaa sita
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginLeft: 5,
    paddingTop: 10,
    width: 40,
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 13,
    width: 26,
    height: 26,
  },
  text: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
  },
});

export default Comments;
