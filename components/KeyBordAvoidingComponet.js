import React, { Component } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image } from 'react-native'

export default class KeyBordAvoidingComponet extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
            >
                <Image 
                source={require('../assets/React.jpg')}
                style={{width:200, height:200}}
                />

               <TextInput
               placeholder="Email"
               style={styles.input}
               />

               <TextInput
               placeholder="Username"
               style={styles.input}
               />

               <TextInput
               placeholder="Password"
               style={styles.input}
               />
               
               <TextInput
               placeholder="Confirm Passowrd"
               style={styles.input}
               />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#3498db',
       alignItems:'center',
       justifyContent:'center'
   },
   input:{
       height:50,
       backgroundColor:'#ffff',
        marginHorizontal:10,
        marginVertical:5,
        width:300
   }
})
