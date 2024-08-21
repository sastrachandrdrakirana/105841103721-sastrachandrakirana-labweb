import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const App = () => {
  const [fontloaded] = useFonts({
    MetropolisBlack : require('./assets/fonts/Metropolis-Black.otf'),
    Metropolisbold : require('./assets/fonts/Metropolis-Bold.otf'),
    MetropolisLight : require('./assets/fonts/Metropolis-Light.otf'),
    MetropolisSemibold : require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!fontloaded){
  return <Text>font tidak ditemukan </Text>

  }
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
      fontFamily: "MetropolisBlack", 
      fontSize:30,
      }}>Metropolisblak</Text>
      <Text style={{
      fontFamily: "Metropolisbold", 
      fontSize:30,
      }}>MetropolisBold</Text>
      <Text style={{
      fontFamily: "MetropolisLight", 
      fontSize:30,
      }}>Metropolislight</Text>
      <Text style={{
      fontFamily: "MetropolisSemiBold", 
      fontSize:30,
      }}>MetropolisSemibold</Text>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})