import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Card,
  CardItem,
} from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome';
// import Swiper from 'react-native-swiper';

import TopPickCardItem from '../components/topPicks';

class HomeScreen extends Component {
  render() {
    return (
      <Container style={{flex: 1}}>
        <ImageBackground style={{}} source={require('../assets/mycity.jpeg')}>
          <Header
            style={[
              {
                backgroundColor: '#3a455c',
                height: 90,
                borderBottomColor: '#757575',
              },
              styles.androidHeader,
            ]}>
            <Left style={{flexDirection: 'row'}}>
              {/* <Icon name="md-menu" style={{color: 'white', marginRight: 15}} /> */}
            </Left>
            <Text style={[styles.title]}>Welcome to fireball</Text>
            <Right></Right>
          </Header>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 90,
              height: 70,
              backgroundColor: '#3a455c',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <View
              style={{
                flex: 1,
                height: '100%',
                marginLeft: 5,
                justifyContent: 'center',
              }}>
              <Item
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  borderRadius: 4,
                }}>
                <Icon name="search" style={{fontSize: 20, paddingTop: 5}} />
                <Input placeholder="Search by name." />
              </Item>
            </View>
          </View>
        </ImageBackground>

        <Content style={{backgroundColor: '#d5d5d6', marginTop: 70}}>
          <Card style={{marginLeft: 5, marginRight: 5}}>
            <CardItem
              header
              style={{borderBottomWidth: 1, borderBottomColor: '#dee0e2'}}>
              <Text>Top Picks</Text>
            </CardItem>

            <TopPickCardItem
              itemName="Sankara Hotel"
              itemCreator="Nairobi"
              itemPrice="$100 a night"
              imageUri={require('../assets/sankara.jpeg')}
              rating={5}
            />
            <TopPickCardItem
              itemName="Safari park"
              itemCreator="Nairobi"
              itemPrice="$190.99 a night"
              imageUri={require('../assets/safpak.jpeg')}
              rating={5}
            />
            <TopPickCardItem
              itemName="Hilton"
              itemCreator="Nairobi"
              itemPrice="$44 a night"
              imageUri={require('../assets/hilton.jpeg')}
              rating={3}
            />
            <TopPickCardItem
              itemName="Sankara Hotel"
              itemCreator="Nairobi"
              itemPrice="$100 a night"
              imageUri={require('../assets/sankara.jpeg')}
              rating={5}
            />
            <TopPickCardItem
              itemName="Safari park"
              itemCreator="Nairobi"
              itemPrice="$190.99 a night"
              imageUri={require('../assets/safpak.jpeg')}
              rating={5}
            />
            <TopPickCardItem
              itemName="Hilton"
              itemCreator="Nairobi"
              itemPrice="$44 a night"
              imageUri={require('../assets/hilton.jpeg')}
              rating={3}
            />
          </Card>
          {/* </ImageBackground>
          </View> */}
        </Content>
      </Container>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});
