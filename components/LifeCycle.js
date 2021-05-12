import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LifeCycle extends Component {
  constructor(props) {
      console.log("constrctor")
    super(props);
    this.state = {
        name:''
    };
  }

  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps")
    return null;
  }

  componentDidMount(){
      console.log("componentDidMount");
  }

  shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
      return true;
  }

  getSnapshotBeforeUpdate(){
      console.log("getSnapshotBeforeUpdate");
      return null;
  }

  componentDidUpdate(){
      console.log("componentDidUpdate");
  }

  render() {
      console.log("render")
    return (
      <View>
        <Text> LifeCycle </Text>
        <Button
            onPress={()=>{
               this.setState({
                   name:'yasindu'
               }) 
            }}
            title="Update"
            color="#841584"
        />
      </View>
    );
  }
}
