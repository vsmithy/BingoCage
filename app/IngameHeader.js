/**
 * This is the header area at the top of the screen when gameplay is active
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class IngameHeader extends Component {
  render() {
    const dropIcon = (<Icon name='more-vert' size={30} color='#fff'/>)
    return (
      <View style={styles.container}>
        <View style={styles.headerTextView}><Text style={styles.headerText}>BINGO Spinner</Text></View>
        <TouchableOpacity onPress={this.props.toggleDrop}>{dropIcon}</TouchableOpacity>
      </View>
    )
  }//render
}//end of component

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d3c6d',
    width: width
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
  headerTextView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4
  },
})
