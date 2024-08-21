import { StyleSheet, text, View,Button,Text, TextInput } from 'react-native'
import React from 'react'

const ButtonCostum  = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: 250,
      height: 100,
      borderRadius: 10 ,
      justifyContent: 'center',
      marginBottom: 10,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

const TextInputCustom =({placeholder,typekeyboard}) => {
  return(
      
        <TextInput
        placeholder={placeholder}
        keyboardType={typekeyboard}

        style={{
          width: 250,
          height:50,
          borderColor:'gray',
          borderWidth: 1,
          borderRadius:10,
          marginBottom:10,
          paddingLeft: 10,
        }}/>
  )
}
const App = () => {
  return(
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
    }}>
      <View>
        <TextInputCustom placeholder="masukkan nama" color="green"/>
        <TextInputCustom placeholder="masukkan nomor" typekeyboard="numeric" color="green"/>
      </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})