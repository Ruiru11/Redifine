import React from 'react';
import {Provider} from 'react-redux';
import store from './redux';
import {Root} from 'native-base';
import {Icon} from 'native-base';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import singlePick from './screens/singlePick';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import welcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Appcontainer />
        </Root>
      </Provider>
    );
  }
}

const DashboardTabNavigatore = createBottomTabNavigator(
  {
    singlePick,
    singlePick,
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  },
);

const DashBoardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigatore: DashboardTabNavigatore,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            name="md-home"
            style={{color: 'white', marginRight: 15}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  SignUp: {screen: SignUp},
  Login: {screen: Login},
  Home: {screen: DashBoardStackNavigator},
  Profile: {screen: HomeScreen},
  singlePick: {screen: singlePick},
});

const AppswitchNavigator = createSwitchNavigator({
  welcomeScreen: {screen: welcomeScreen},
  SignUp: {screen: SignUp},
  Login: {screen: Login},
  HomeScreen: {screen: HomeScreen},
  Dashboard: {screen: AppDrawerNavigator},
  singlePick: {screen: singlePick},
});

const Appcontainer = createAppContainer(AppswitchNavigator);
