import React from 'react';

// Components
import splash     from './app/components/splash';
import main     from './app/components/main';
import login     from './app/components/login';

import { AppRegistry,View, Image, TouchableOpacity,Text} from 'react-native';
import { DrawerItems,Icon,Header,Left,Button,Body,Title} from 'native-base';
import {createBottomTabNavigator,createStackNavigator,createSwitchNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from 'react-native-vector-icons';



const AuthStack = createStackNavigator(
  {
    LoginScreen: {screen:login,navigationOptions: { header: null }},
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const AppStack = createStackNavigator(
  {
    SplashScreen:{screen:splash,navigationOptions:{header:null}},
    MainScreen: {screen:main,navigationOptions:{header:null}},
  }
)


const AppContainer = createAppContainer(
  createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  }
));


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontLoaded: false
    }
  }

  render() {
    return(
      <AppContainer/>
    )
  }
}
