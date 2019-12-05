import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

import {Card, CardItem, Right, Button} from 'native-base';
import StarRating from 'react-native-star-rating';
import {withNavigation} from 'react-navigation';

class TopPickCardItem extends Component {
  render() {
    return (
      <CardItem>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('singlePick')}>
          <View>
            <Image
              style={{height: 90, width: 60}}
              source={this.props.imageUri}
            />
          </View>
        </TouchableHighlight>

        <Right
          style={{
            flex: 1,
            alignItems: 'flex-start',
            height: 90,
            paddingHorizontal: 20,
          }}>
          <Text onPress={() => this.props.navigation.navigate('singlePick')}>
            {this.props.itemName}
          </Text>
          <Text
            style={{color: 'grey', fontSize: 11}}
            onPress={() => this.props.navigation.navigate('singlePick')}>
            {this.props.itemCreator}
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}
            onPress={() => this.props.navigation.navigate('singlePick')}>
            {this.props.itemPrice}
          </Text>

          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={12}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
        </Right>
      </CardItem>
    );
  }
}
export default withNavigation(TopPickCardItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
