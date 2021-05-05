import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base'

export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <Text>Screen Two</Text>
        <Button rounded success
        onPress={()=>{
            this.props.navigation.navigate('ScreenOne');
        }}
        >
          <Text>Load Screen One</Text>
        </Button>
    </View>
    );
  }
}
