import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
        <View>
            <Child name="yasindu"/>
        </View>
    );
  }
}
