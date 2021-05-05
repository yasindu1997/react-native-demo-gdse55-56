import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'native-base'

export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Text>Screen One</Text>
          <Button rounded success
          onPress={()=>{
              this.props.navigation.navigate('ScreenTwo')
          }}
          >
            <Text>Load Screen Two</Text>
          </Button>
      </View>
    );
  }
}
