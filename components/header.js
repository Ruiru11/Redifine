import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Icon} from 'native-base';

export default class CustomHeader extends Component {
  renderContent() {
    return (
      <View style={styles.content}>
        <View style={styles.left}>{this.props.left}</View>
        <View style={styles.center}>{this.props.center}</View>
        <View style={styles.right}>{this.props.right}</View>
      </View>
    );
  }

  renderHeaderWithImage() {
    return (
      <ImageBackground style={styles.container} source={this.props.imageSource}>
        {this.renderContent()}
      </ImageBackground>
    );
  }

  renderHeaderWithoutImage() {
    return (
      <View style={[{backgroundColor: '#f8f8f8'}, styles.container]}>
        {this.renderContent()}
      </View>
    );
  }

  render() {
    return this.props.image
      ? this.renderHeaderWithImage()
      : this.renderHeaderWithoutImage();
  }
}

const styles = StyleSheet.create({
  container: {
    // top: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.045,
  },
  left: {
    marginHorizontal: 5,
  },
  center: {
    marginHorizontal: 5,
  },
  right: {
    marginHorizontal: 5,
  },
});
