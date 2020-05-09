import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons,MaterialCommunityIcons,MaterialIcons,FontAwesome} from '@expo/vector-icons'

import HomeScreen from './src/Screens/HomeScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import LoadingScreen from './src/Screens/loadingScreen'
import LoginScreen from './src/Screens/LoginScreen'
import MessageScreen from './src/Screens/MessageScreen'
import MapScreen from './src/Screens/MapScreen'
import PostScreen from './src/Screens/PostScreen'
import ProfileScreen from './src/Screens/ProfileScreen'


import * as firebase from 'firebase'
import { TabBarIOS } from 'react-native'

var firebaseConfig = {
  apiKey: "AIzaSyC2v53Iw8Ia0PXRyxMowZvLQeEmXznPWto",
  authDomain: "udb-social-f0139.firebaseapp.com",
  databaseURL: "https://udb-social-f0139.firebaseio.com",
  projectId: "udb-social-f0139",
  storageBucket: "udb-social-f0139.appspot.com",
  messagingSenderId: "571825841834",
  appId: "1:571825841834:web:002961fc3609941a0f92d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ContainerApp = createStackNavigator(

    {
      default: createBottomTabNavigator(

        {
          Home: {
              screen: HomeScreen,
              navigationOptions:{
                  tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="home-circle" size={30} color={tintColor} />
              }
            },
            Message: {
              screen: MessageScreen,
              navigationOptions:{
                  tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="message-reply" size={30} color={tintColor} />
              }
            },
            Post: {
              screen: PostScreen,
              navigationOptions:{
                  tabBarIcon: ({tintColor}) => <MaterialIcons name="add-circle-outline" size={48} color={tintColor} />
              }
            },
            Map: {
              screen: MapScreen,
              navigationOptions:{
                  tabBarIcon: ({tintColor}) => <FontAwesome name="map-marker" size={30} color={tintColor} />
              }
            },
            
            profile:{
              screen: ProfileScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <MaterialIcons name="person-pin" size={30} color={tintColor} />
              }
            }
        },
        
        {

          
            tabBarOptions:{
                activeTintColor: "#9645e3",
                inactiveTintColor: "#bbbbbb",
                showLabel: false
            }
        }
        
      ),
    },
    {
      mode:'modal',
      headerMode:'none'
    }
  
);

const StackAuth = createStackNavigator({

    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(

      {
          Loading: LoadingScreen,
          App: ContainerApp,
          Auth: StackAuth
      },
      {
          initialRouteName: "Loading"
      }

  )
);