/**
 * This component shows the most recent drawings in a horizontal
 * scrolling list.
 */

import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'

export default class DrawHistoryScroller extends Component {
  //lifecycle methods
  componentDidUpdate(){
    this.refs.scroller.scrollToEnd()
  }// end of componentDidUpdate



  render() {
    const { recents } = this.props

    //add the data from state to a string
    let output = ''
    if(recents.length > 0){
      for(i=0; i < recents.length; i++){
        output = output + recents[i] + '  '
      } // end for
    }//end if

    return (
      <ScrollView 
        style={styles.scroll} 
        alwaysBounceHorizontal={true} 
        horizontal={true} 
        snapToAlignment='end' 
        ref='scroller'
      >
        <View style={styles.container}>
          <Text style={styles.scrollText}>{output}</Text>
        </View>
      </ScrollView>
    )
  }//render
}//end of component

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#eee',
    width: width
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 60
  },
  scrollText: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
})
