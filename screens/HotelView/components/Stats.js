import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {gs, colors} from '../../../styles'
import {Feather, Entypo} from '@expo/vector-icons'

const starColors = ["#e3ab53","#e3ab53","#e3ab53","#e3ab53","#8b6f43"];

const Cirlce = props => {
    return <View style={[styles.cirlce, props.style]} />
}

export default function Stats() {

    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <Feather name="sun" size={24} color={colors.sunny} />
                
                <View style={{marginLeft: 10}}>
                    <Text style={styles.title}>27˚</Text>
                    <Text style={styles.subTitle}>Sunny</Text>
                </View>
            </View>

            <View style={{marginLeft:10}}>
                <Text style={styles.title}>
                    8.2
                    <Text style={[styles.subTitle, {paddingLeft: 8}]}>&nbsp;&nbsp; +4k Votes</Text>
                </Text>

                <View style={gs.rowCenter}>
                    {starColors.map((color,index) => {
                        return(
                            <Entypo name="star" size={14} color={color} key={index} style={{marginHorizontal: 4},{marginLeft:-1}} />
                        )
                    })}
                </View>
            </View>

            <View style={styles.circlesContainer}>
                <Cirlce style={{ backgroundColor: "#999",marginLeft:-10, zIndex:3}} />
                <Cirlce style={{ backgroundColor: "#888",marginLeft:-10, zIndex:2}} />
                <Cirlce style={{ backgroundColor: "#777",marginLeft:-10, zIndex:1}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:8,
        ...gs.rowCenter,
        ...gs.sectionContainer,
        paddingHorizontal:12,      
    },
    weatherContainer: {
        paddingHorizontal:-2,   
        ...gs.rowCenter,
        padding:10,
        paddingRight: 12,
        marginRight:0,
        borderRightColor: "#444",
        borderRightWidth:1
    },
    title: {
        color: colors.text,
        fontSize:15,
        fontWeight:"800"
    },
    subTitle: {
        color: colors.textSec,
        fontSize: 10,
        fontWeight: "800"
    },
    circlesContainer: {
        flex:1, 
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    cirlce: {
        width:36,
        height:36,
        borderRadius: 36/2,
        borderWidth: 2,
        borderColor: colors.lightBg
    }
})
