import React, { Component } from 'react';
import {View, Text} from 'react-native';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFunction';
import CoreComponents from './components/CoreComponents';
import ScrolleViewComponent from './components/ScrolleViewComponent';
import KeyBordAvoidingComponet from './components/KeyBordAvoidingComponet';
import Flex from './components/Flex';
import Nativebase from './components/Nativebase';
import Parent from './components/Parent';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncView from'./components/AsycView'
import Fetch from './components/Fetch'

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Fetch" component={Fetch} />
        <Stack.Screen name="AsyncView" component={AsyncView} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}