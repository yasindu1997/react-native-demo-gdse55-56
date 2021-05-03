import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    {/* search bar */}
                </View>

                <View style={styles.view2}>
                    {/* table */}
                </View>

                <View style={styles.view3}>
                    {/* text */}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
 container:{
     flex:1,
     backgroundColor:'#e67e22'
 },
 view1:{
     flex:1.5,
     backgroundColor:'#27ae60'
 },
 view2:{
     flex:5,
     backgroundColor:'#2980b9'
 },
 view3:{
     flex:0.5,
     backgroundColor:'#e74c3c'
 }
})
