import { StyleSheet, View, Text, TextInput,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ButtonCustom = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

const TextInputCustom = ({ placeholder, typekeyboard }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={typekeyboard}
      style={{
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 18,
      }}
    />
  )
}

const  App = ()  => {
  const navigation = useNavigation();
  const [fontloaded]= useFonts({
    MetropolisBlack : require('../assets/fonts/Metropolis-Black.otf'),
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')}>
        <Image source={require('../assets/back.png')} style={{width: 24, height:24,marginTop:50}}/>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <View style={styles.form}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Text style={{ fontSize: 12, textAlign:'center' }}>Please,enter your email address. You will receive a link to create a new password via email.</Text>
          </View>
          <TextInputCustom placeholder="Email" typekeyboard="email-address" />
          <ButtonCustom text="SEND" color="red" />
        </View>
      </View>
      </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 70,
    fontFamily: "MetropolisBlack"
  },
  form: {
    width: '100%',
    alignItems: 'center',
  }
  });
