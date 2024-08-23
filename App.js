import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './User/LoginPge';
import shop from './menu/shop.js';
import bag from './menu/bag.js';
import favorite from './menu/favorite.js'
import profil from './menu/profil.js';
import HomePage from './menu/home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/home-activated.png';
import HomeInaktif from './assets/icon/home-inactive.png';
import Shop from './assets/icon/shop-activated.png';
import ShopInaktif from './assets/icon/shop-inactive.png';
import Bags from './assets/icon/bag-activated.png';
import BagsInactif from './assets/icon/bag-inactive.png';
import Favorit from './assets/icon/favorites-activated.png';
import Favoriinactive from './assets/icon/favorites-inactive.png';
import Profil from './assets/icon/profil-activated.png';
import Provilinactiv from './assets/icon/profil-inactive.png';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop" 
        component={shop}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bag" 
        component={bag}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Bags : BagsInactif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit" 
        component={favorite}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Favorit : Favoriinactive}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profil" 
        component={profil}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?   Profil : Provilinactiv}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="profil" component={profil} options={{headerShown: false}} />
        <Stack.Screen name="favorit" component={favorite} options={{headerShown: false}} />
        <Stack.Screen name="bag" component={bag} options={{headerShown: false}} />
        <Stack.Screen name="shop" component={shop} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage}options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;