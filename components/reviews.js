import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

class Reviews extends Component {
  render() {
    return (
      <Card>
        <CardItem header bordered>
          <Text>Reviews</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              NativeBase is a free and open source framework that enable
              developers to build high-quality mobile apps using React Native
              iOS and Android apps with a fusion of ES6.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default Reviews;
