import React, { Component } from 'react'
import { View, Text, Image, TextInput, Button, StyleSheet, ScrollView } from 'react-native'

export default class CoreComponents extends Component {
    constructor(){
        this.state={
            customerName : '',
        }
    }

    //function
    getCustomerData(){

    }

    getStudent(){
        var name = this.state.customerName;
        console.log(name);
    }

    render() {
        return (
            <ScrollView>
                <Text >Hello IJSE</Text>
                <Image
                    source={require('../assets/React.jpg')}
                    style={{width:300, height:300}}
                />

                <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{width:200, height:200}}
                />

                <TextInput
                    placeholder="Customer Name"
                    value={this.state.customerName}
                    onChangeText={(value)=>{
                        this.setState({
                            customerName:value
                        })
                    }}
                />

                <Button
                title="Print Me"
                onPress={()=>{
                    console.log(this.state.customerName);
                }}
                />

                <Button
                title="Get Student"
                color="red"
                onPress={this.getStudent.bind(this)}
                />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
title:{
    color:'green',
},
head:{
    marginBottom:20
}
})
