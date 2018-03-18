/**
 * StartScreen shows the new game button and is where the player begins the game!
 */

import React, { Component } from 'react'
import { StyleSheet, View, Button, ImageBackground, Dimensions } from 'react-native'

export default class StartScreen extends Component {
  static navigationOptions = {
    title: 'Start',
    header: null
  }//navigationOptions

  render() {
    const { width, height } = Dimensions.get('screen')

    return (
      <View style={styles.outerContainer}>
        <ImageBackground source={require('../assets/bingoStartScreen.png')} style={{width: width, height: height-60}}>
          <View style={styles.container}>
            <Button 
              title='   New Game   '
              color='#6d066d'
              onPress={() => this.props.navigation.navigate('Game')}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }//render
}//end of componend


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})