import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

//local files
import StartScreen from './StartScreen'
import InGame from './InGame'
import History from './History'

//Rootstack contains the screens for the app. Any props that need to
//be passed between screens are passed via the react-navigation navigator.navigate() params
const RootStack = StackNavigator({
    Home: {
      screen: StartScreen
    },
    Game: {
      screen: InGame
    },
    Hist: {
      screen: History
    }
  },
  {
    initialRouteName: 'Home'
  }
)//end rootstack

export default class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }//render
}//end of component