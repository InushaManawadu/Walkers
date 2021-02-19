import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {gs, colors} from '../../../styles'

export default function Bookmark() {
    return (
        <View style={styles.bookmark}>
            <Feather name="bookmark" size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    bookmark: {
        position:"relative",
        width:56,
        height:56,
        right:32,
        left:300,
        top: -56 /2,
        backgroundColor:colors.text,
        ...gs.center,
        borderRadius:56/2,
        zIndex:10
    }
})
