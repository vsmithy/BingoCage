/**
 * This is the main component for the active game play.
 * It is basically 4 main sections - header, scrolling recent drawings, current draw, 
 * and the big yellow roll button.
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native'

//local files
import IngameHeader from './IngameHeader'
import DrawHistoryScroller from './DrawHistoryScroller'

export default class InGame extends Component {
  constructor(props) {
    super(props)
    
    this.rollAction = this.rollAction.bind(this)
    
    this.state = {
      gameStarted: false,
      recentDrawings: [],
      history: [[], [], [], [], []],
      dropShowing: false
    }
  } //end constructor

  static navigationOptions = {
    title: 'InGame',
    header: null
  } //end nav options

  //rollAction is the function that does the work when you press the roll button
  //It generates a random number and letter that corresponds to pieces on the board
  rollAction(){
    const { recentDrawings, history, gameStarted } = this.state
    const bingo = ['B','I','N','G','O'] //one of the letters is selected at random each roll
    
    if(gameStarted === true){
      //the letter selection
      let letterIdx = Math.floor(Math.random()*5)
      let chosenLetter = bingo[letterIdx]
      
      //the number selection can be between 1 and 75
      //'B' ranges from 1-15, I ranges from 16-30, and so on...
      if(letterIdx === 0){
        offset = 1
      } else if(letterIdx === 1){
        offset = 16
      } else if(letterIdx === 2){
        offset = 31
      } else if(letterIdx === 3){
        offset = 46
      } else{
        offset = 61
      }

      let chosenNum = (Math.floor(Math.random()*15))+offset  //generates num between 1 & 75

      //check to see if it is a duplicate
      let dupe = false
      for(i=0; i<history[letterIdx].length; i++){
        if(history[letterIdx][i] === chosenNum){
          dupe = true
        }//if
      }//for
      if(dupe){
        let chosenCopy = chosenNum
        while(chosenNum === chosenCopy){
          chosenNum = (Math.floor(Math.random()*15))+offset  //generates num between 1 & 75
        }//while
      }//if

      //for the recentDrawings area
      let thisDraw = chosenLetter + chosenNum
      let tempRecents = []
      tempRecents = recentDrawings.map(item => item)
      tempRecents.push(thisDraw)
      this.setState({recentDrawings: tempRecents})
      
      //for the overall game history
      let tempHist = []
      tempHist = history.map((item) => item)
      tempHist[letterIdx].push(chosenNum)
      this.setState({ history: tempHist })
    } else {
      //the letter selection
      let letterIdx = Math.floor(Math.random()*5)
      let chosenLetter = bingo[letterIdx]
  
      //the number selection can be between 1 and 75
      //'B' ranges from 1-15, I ranges from 16-30, and so on...
      if(letterIdx === 0){
        offset = 1
      } else if(letterIdx === 1){
        offset = 16
      } else if(letterIdx === 2){
        offset = 31
      } else if(letterIdx === 3){
        offset = 46
      } else{
        offset = 61
      }
      let chosenNum = (Math.floor(Math.random()*15))+offset  //generates num between 1 & 75
  
      //for the recentDrawings area
      let thisDraw = chosenLetter + chosenNum
      // console.log('this draw: ' + thisDraw)
      let tempRecents = []
      tempRecents = recentDrawings.map(item => item)
      tempRecents.push(thisDraw)
      // console.log('tempRecents: ' + tempRecents)
      this.setState({recentDrawings: tempRecents})
  
      //for the overall game history
      let tempHist = []
      tempHist = history.map((item) => item)
      tempHist[letterIdx].push(chosenNum)
      this.setState({ history: tempHist })
      this.setState({gameStarted: true})
    }

  }//end roll action

  //toggleDrop is for the menu dropdown in the corner of the app
  toggleDrop(){
    tmp = !this.state.dropShowing
    this.setState({ dropShowing: tmp })
  }//toggleDrop


  //renderChoice chooses what to render based on whether the dropdown is active or not
  renderChoice(){
    if(this.state.dropShowing){
      //true
      const {recentDrawings, history} = this.state
      let currentDraw = this.state.gameStarted ? recentDrawings[recentDrawings.length-1] : 'Tap Roll to Begin!'
      return (
        <View style={styles.container}>
          <IngameHeader style={styles.header} toggleDrop={this.toggleDrop.bind(this)} />
          <DrawHistoryScroller style={styles.scroller} recents={this.state.recentDrawings} />
          <View style={styles.currentDraw} ><Text style={this.state.gameStarted ? styles.currentDrawText : styles.currentDrawTextEntry}>{currentDraw}</Text></View>
          <TouchableOpacity style={styles.roll}><Text style={styles.rollText}>Roll</Text></TouchableOpacity>
          <TouchableOpacity style={styles.offClick} onPress={this.toggleDrop.bind(this)}></TouchableOpacity>
          <View style={styles.drop}>
            <TouchableOpacity style={styles.hist} onPress={() => this.props.navigation.navigate('Hist', { history })}>
              <Text style={{fontSize: 20}}>History</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.prev} onPress={() => this.props.navigation.goBack()}>
              <Text style={{fontSize: 20}}>End Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      //dont show drop down
      const {recentDrawings} = this.state
      let currentDraw = this.state.gameStarted ? recentDrawings[recentDrawings.length-1] : 'Tap Roll to Begin!'
      return (
        <View style={styles.container}>
          <IngameHeader style={styles.header} toggleDrop={this.toggleDrop.bind(this)} navigator={this.props.navigator}  />
          <DrawHistoryScroller style={styles.scroller} recents={this.state.recentDrawings} />
          <View style={styles.currentDraw}><Text style={this.state.gameStarted ? styles.currentDrawText : styles.currentDrawTextEntry}>{currentDraw}</Text></View>
          <TouchableOpacity style={styles.roll} onPress={this.rollAction.bind(this)}><Text style={styles.rollText}>Roll</Text></TouchableOpacity>
        </View>
      )
    }
  }
  render() {
    return (this.renderChoice())
  } //end render
} //end InGame component

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    margin: 10,
    flex: 1
  },
  scroller: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1
  },
  currentDraw: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6
  },
  currentDrawText: {
    fontSize: 110,
    textAlign: 'center',
  },
  currentDrawTextEntry: {
    fontSize: 40,
    textAlign: 'center',
  },
  roll: {
    flex: 4,
    backgroundColor: '#fff5a3',
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  rollText: {
    fontSize: 50,
    textAlign: 'center'
  },
  drop: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: 150,
    height: 100,
    top: 25,
    right: 20,
    position: 'absolute',
    elevation: 8,
    // paddingLeft: 10,
    paddingBottom: 5
  },
  prev: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  hist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  offClick: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ddd',
    opacity: 0.2,
    top: 0,
    right: 0,
    position: 'absolute',
    elevation: 6,
    width: width,
    height: height
  }
})