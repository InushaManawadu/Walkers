import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {gs, colors} from '../../../styles'
import {Feather, Entypo} from '@expo/vector-icons'

export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={StyleSheet.weatherContainer}>
                <Feather name="sun" size={24} color={colors.darkHl} />
                
                <View style={{marginLeft: 8}}>
                    <Text style={styles.title}>27</Text>
                    <Text style={styles.subTitle}>Sunny</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        ...gs.rowCenter,
        ...gs.sectionContainer,
        paddingHorizontal:12,
        
    },
    weatherContainer: {
        ...gs.rowCenter,
        paddingRight: 12,
        marginRight: 12,
        borderRightColor: "red",
        borderRightWidth:1
    },
    title: {
        color: colors.text
    }
})
