import React from 'react';
import gambar from '../assets/google.png'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView>
        <View style={{alignItems:'flex-start',paddingVertical:40,borderBottomWidth:1,borderBottomColor:'#ddd',paddingHorizontal:20}}>
        <Text style={{flex:1, fontSize: 30 , fontWeight:'bold',}}>My Profile</Text>
          <View style={{paddingVertical:20}}>
            <Image
              source={gambar} 
              style={{
              
                width: 80,
                height: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{paddingVertical:1}}>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>Bang Google</Text>
            <Text style={{
              fontSize : 16,
              color : '#777'
            }}>sastrachandra86@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize: 16,fontWeight:'bold'}}>My orders</Text>
            <Text style={{fontSize: 11,color:'#777',}}>Already have 12 orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Shipping addresses</Text>
            <Text style={{fontSize: 11, color: '#777',}}>3 addresses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Payment methods</Text>
            <Text style={{fontSize: 11,color:'#777',}}>Visa **34</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize: 16,fontWeight:'bold'}}>Promocodes</Text>
            <Text style={{fontSize: 11, color: '#777'}}>You have special promocodes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize: 16,fontWeight:'bold'}}>My reviews</Text>
            <Text style={{fontSize: 11, color: '#777'}}>Reviews for 4 items</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{flexDirection: 'column',}}>
            <Text style={{fontSize: 16,fontWeight:'bold'}}>Settings</Text>
            <Text style={{fontSize: 11, color: '#777'}}>Notifications, password</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;