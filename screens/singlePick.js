import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Right,
  Container,
  Content,
  Header,
  View,
  Button,
  Text,
  Icon,
  Left,
  Thumbnail,
  Body,
  Item,
  Input,
  Title,
  Tab,
  Tabs,
  ListItem,
} from 'native-base';
import Reviews from '../components/reviews';
import Contact from '../components/contact';
import Comments from '../components/comments';
import CustomHeader from '../components/header';

import MapView, {
  ProviderPropType,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';

import {Divider} from 'react-native-elements';

import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import {TouchableHighlight} from 'react-native-gesture-handler';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -1.26242005825043;
const LONGITUDE = 36.802318572998;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class singlePick extends Component {
  constructor(props) {
    super();
    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
      }),
      mapType: 'standard',
    };
  }

  animate() {
    const {coordinate} = this.state;
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
    };

    if (Platform.OS === 'android') {
      if (this.marker) {
        this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  }

  switchMapType = () => {
    console.log('changing');
    this.setState({
      mapType: this.state.mapType === 'satellite' ? 'standard' : 'satellite',
    });
  };

  render() {
    const test = ['ruiru', 'ruiru', 'ruiru'];
    return (
      <Container>
        <ImageBackground style={{}} source={require('../assets/black.jpeg')}>
          <Header style={{backgroundColor: '#C2D5F5d'}}>
            <Left>
              <Button
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text
                  onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  Back
                </Text>
              </Button>
            </Left>
            <Right></Right>
          </Header>
        </ImageBackground>

        <Content>
          <View>
            <Card>
              <CardItem>
                <Text style={{color: 'grey'}}>
                  Sankara Hotel{'\n'}
                  Nairobi Sankara Hotel, Moi Ave, CBD, Nairobi
                </Text>
              </CardItem>
              <CardItem>
                <TouchableHighlight underlayColor="red" activeOpacity={1}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={3}
                    starSize={12}
                    fullStarColor="orange"
                    emptyStarColor="orange"
                  />
                </TouchableHighlight>
              </CardItem>
              <CardItem>
                <Text style={{color: '#F23E1A'}}>Cell:+34343</Text>
                <Text style={{color: '#F23E1A'}}>|| Open 24hrs</Text>
                <Text>|| Tasty and Amazing</Text>
              </CardItem>

              <CardItem cardBody>
                <Image
                  source={require('../assets/hilton.jpeg')}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}></View>
              </CardItem>
            </Card>
            <Card>
              <CardItem style={{backgroundColor: '#F5F5F5'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Offers & Discounts
                </Text>
              </CardItem>
              <Divider style={{backgroundColor: 'black'}} />
              <CardItem>
                <Body>
                  <Text>No offers currently</Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem style={{backgroundColor: '#F5F5F5'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Restaurant Information
                </Text>
              </CardItem>
              <Divider style={{backgroundColor: 'black'}} />
              <Content>
                <ListItem icon>
                  <Left>
                    <Button style={{backgroundColor: 'black'}}>
                      <Icon active name="nutrition" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Cuisine</Text>
                  </Body>
                  <Right>
                    <Text>International Dishes</Text>
                    {/* <Icon active name="arrow-forward" /> */}
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Button style={{backgroundColor: 'black'}}>
                      <Icon active name="home" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Rooms</Text>
                  </Body>
                  <Right>
                    <Text>500</Text>
                    {/* <Icon active name="arrow-forward" /> */}
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Button style={{backgroundColor: 'black'}}>
                      <Icon active name="car" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Services</Text>
                  </Body>
                  <Right>
                    <Text>Taxi Services</Text>
                    {/* <Icon active name="arrow-forward" /> */}
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Button style={{backgroundColor: 'black'}}>
                      <Icon active name="bicycle" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Amenities</Text>
                  </Body>
                  <Right>
                    <Text>Gym and Sauna</Text>
                    {/* <Icon active name="arrow-forward" /> */}
                  </Right>
                </ListItem>
              </Content>
            </Card>
            <Card>
              <CardItem style={{backgroundColor: '#F5F5F5'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Map & Location
                </Text>
              </CardItem>
              <Divider style={{backgroundColor: 'black'}} />
              <CardItem>
                <TouchableOpacity>
                  <Button>
                    <Text onPress={() => this.switchMapType()}>
                      {this.state.mapType}
                    </Text>
                  </Button>
                </TouchableOpacity>
              </CardItem>
              <CardItem>
                <MapView
                  style={{height: 200, width: null, flex: 1}}
                  mapType={this.state.mapType}
                  initialRegion={{
                    latitude: -1.26242005825043,
                    longitude: 36.802318572998,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker.Animated
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={{
                      latitude: -1.26242005825043,
                      longitude: 36.802318572998,
                    }}
                  />
                </MapView>
              </CardItem>
            </Card>
            <Container>
              <Tabs>
                <Tab heading="Reviews">
                  <Reviews />
                </Tab>
                <Tab heading="Comments">
                  {test.map(te => (
                    <Comments />
                  ))}
                </Tab>
                <Tab heading="Contact">
                  <Contact />
                </Tab>
              </Tabs>
            </Container>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default singlePick;
