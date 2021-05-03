import React, { Component } from 'react';
import {View, Text} from 'react-native';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFunction';
import CoreComponents from './components/CoreComponents';
import ScrolleViewComponent from './components/ScrolleViewComponent';
import KeyBordAvoidingComponet from './components/KeyBordAvoidingComponet';
import Flex from './components/Flex';
import Nativebase from './components/Nativebase';

export default class App extends Component{
  render(){
    return(
     <Nativebase/>
    )
  }
}