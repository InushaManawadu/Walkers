import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import {gs, colors} from '../../../styles'
import Category from './Category'
import {Feather, Entypo} from '@expo/vector-icons'

export default function Scroll() {
    return (
        <ScrollView scrollEventThrottle={16}>           
            <View style={styles.scroller}>
                <View style={styles.scrollSection}>
                        <Text style={styles.head}>View More <Feather name="plus-circle" size={14} color={colors.text} /></Text>

                </View>
                <ScrollView horizontal={true} style={{padding:10}}>
                   <Category imageUri={require('../../../assets/Uga-2.jpg')}/>
                   <Category imageUri={require('../../../assets/Uga-1.jpg')}/>
                   <Category imageUri={require('../../../assets/Uga-3.jpg')}/>
                   <Category imageUri={require('../../../assets/Uga-4.jpg')}/>
                   <Category imageUri={require('../../../assets/Uga-5.jpg')}/>
                   <Category imageUri={require('../../../assets/Uga-6.jpg')}/>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    head: {
        paddingHorizontal:18,
        fontWeight:"700",
        color: colors.text,
        fontSize:14
    },

    dot: {
        width:56,
        height:56,
    },

    scroller: {
        marginLeft:-8,
        height:130,
        marginTop:5,
        // paddingTop:10,
        ...gs.sectionContainer
    },
})
