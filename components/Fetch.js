import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/users',{
        method:'GET'
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  render() {
    return (
      <View>
        <Text> Fetch API calling</Text>
        <Button rounded success
        onPress={this.getData.bind(this)}
        >
            <Text>Get Data</Text>
          </Button>
      </View>
    );
  }
}
