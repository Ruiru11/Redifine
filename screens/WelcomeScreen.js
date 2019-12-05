import React, {Component} from 'react';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
// import { getToken } from "../utils/keys";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

class welcomeScreen extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await getToken();
    const {
      navigation: {navigate},
    } = this.props;
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});

      navigate(token ? 'Dashboard' : 'Login');
    }, 4000);
  };
  render() {
    const {loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            {loading ? (
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/rip.png')}
                />
                <Bubbles size={11} color="#FFF" />
              </View>
            ) : null}
            <View>
              <Image
                style={styles.logo}
                source={require('../assets/rip.png')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57098A',
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 150,
  },
  infoContainer: {
    marginTop: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
  },
  buttonContainer: {
    backgroundColor: 'rgb(2, 2, 97)',
    paddingVertical: 15,
    borderRadius: 4,
    paddingHorizontal: 20,
    borderBottomColor: 'white',
  },
  buttonContainernew: {
    backgroundColor: 'rgb(2, 2, 97)',
    paddingVertical: 15,
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 40,
    borderColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  text: {
    justifyContent: 'center',
    fontSize: 30,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default welcomeScreen;
