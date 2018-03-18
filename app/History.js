/**
 * The History component shows the previous values that have been drawn. it can
 * be used to verify if someone has won the game. Each of the sections are vestically
 * scrollable once the list becomes longer than the screen height.
 */

import React, { Component } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class History extends Component {
  static navigationOptions = {
    title: 'History',
    header: null
  }//navigationOptions

  render() {
    let params = this.props.navigation.state.params

    //convert the bingo draw results to string for vertical display
    let output1 = ''
    let output2 = ''
    let output3 = ''
    let output4 = ''
    let output5 = ''

    //sort the items that are currently in state
    params['history'][0].sort((a, b) => a - b)
    params['history'][1].sort((a, b) => a - b)
    params['history'][2].sort((a, b) => a - b)
    params['history'][3].sort((a, b) => a - b)
    params['history'][4].sort((a, b) => a - b)

    //add items to a string and then we display the strings in our component
    if(params['history'][0].length > 0){
      for(i=0; i < params['history'][0].length; i++){
        output1 = output1 + params['history'][0][i] + '\n'
      }
    } //for 'B'
    if(params['history'][1].length > 0){
      for(i=0; i < params['history'][1].length; i++){
        output2 = output2 + params['history'][1][i] + '\n'
      }
    }  //for 'I'
    if(params['history'][2].length > 0){
      for(i=0; i < params['history'][2].length; i++){
        output3 = output3 + params['history'][2][i] + '\n'
      }
    } //for 'N'
    if(params['history'][3].length > 0){
      for(i=0; i < params['history'][3].length; i++){
        output4 = output4 + params['history'][3][i] + '\n'
      }
    } //for 'G'
    if(params['history'][4].length > 0){
      for(i=0; i < params['history'][4].length; i++){
        output5 = output5 + params['history'][4][i] + '\n'
      }
    } //for 'O'

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><Icon name='arrow-back' size={30} color='#fff'/></TouchableOpacity>
          <Text style={{ fontSize: 30, color: '#fff', marginLeft: 10 }}>Draw History</Text>
        </View>
        <View style={styles.letters}>
          <Text style={styles.letterHead}>B</Text>
          <Text style={styles.letterHead}>I</Text>
          <Text style={styles.letterHead}>N</Text>
          <Text style={styles.letterHead}>G</Text>
          <Text style={styles.letterHead}>O</Text>
        </View>
        <View  style={styles.histList}>
          <ScrollView style={styles.histRowO}><Text style={styles.histRowText}>{output1}</Text></ScrollView>
          <ScrollView style={styles.histRowE}><Text style={styles.histRowText}>{output2}</Text></ScrollView>
          <ScrollView style={styles.histRowO}><Text style={styles.histRowText}>{output3}</Text></ScrollView>
          <ScrollView style={styles.histRowE}><Text style={styles.histRowText}>{output4}</Text></ScrollView>
          <ScrollView style={styles.histRowO}><Text style={styles.histRowText}>{output5}</Text></ScrollView>
        </View>
      </View>
    )
  }//render
}//end of component

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: width
  },
  header: {
    backgroundColor: '#6d3c6d',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 5,
    width: width
  },
  letters: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
  },
  histList: {
    flex: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: width,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 10,
  },
  histRowO: {
    flex: 1,
  },
  histRowE: {
    flex: 1,
    backgroundColor: '#fffbe0',
  },
  histRowText: {
    fontSize: 30,
    textAlign: 'center'
  },
  letterHead: {
    fontSize: 30,
    width: (width-40)/5,
    textAlign: 'center'
  }
})
