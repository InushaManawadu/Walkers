import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Category extends Component {
    render() {
        return (
            <View style={styles.scrollItem}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri} 
                        style={{flex:1, 
                        width:null,
                        height:null,
                        resizeMode:'cover'}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollItem: {
        height:130,
        width:130,
        marginLeft:10,
    },
})
