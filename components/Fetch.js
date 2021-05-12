import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'foo',
      userId: 1,
      body:'bar'
    };
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{method:'GET'})
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        title:json.title
      })
    });
  }

  getAllData(){
    fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'})
  .then((response) => response.json())
  .then((json) => console.log(json[2].title));
  }

  postData(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: this.state.title,
    body: this.state.body,
    userId: this.state.userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  render() {
    return (
      <View>
        <Text> {this.state.title} </Text>
        <Button rounded success
        onPress={this.getData.bind(this)}
        >
            <Text>Get Data</Text>
          </Button>

          <Button rounded success
        onPress={this.getAllData.bind(this)}
        >
            <Text>Get All Data</Text>
          </Button>

          <Button rounded success
        onPress={this.postData.bind(this)}
        >
            <Text>Post Data</Text>
          </Button>
      </View>
    );
  }
}
