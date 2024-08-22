import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bag = () => {
  return (
    <View style={{
      flex : 1,
      flexDirection:'row'
      }}>
        <View style={{flex:1}}>
        <View style={{
          width:100,height:100,backgroundColor:'red'
        }}>

        </View>
        </View>
    </View>
  )
}

export default bag

const styles = StyleSheet.create({})