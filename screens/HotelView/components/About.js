import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {gs, colors} from '../../../styles'


const hotel = {
    name: "Chena Huts by Uga",
    price: "LKR 145,000",
    localtion: "Yala",
    about:"Set amongst the golden dunes and the lush greenery in Yala, Uga Chena Huts blends Sri Lanka’s most celebrated features its tropical beaches and its exotic wildlife.",
};

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}> {hotel.name} </Text>

            <Text style={styles.info}> 
                {hotel.price} &#8226; {hotel.localtion}
            </Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}> About {hotel.name} </Text>
            <Text style={styles.about}> {hotel.about} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:-25,
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        color: colors.textSec,
        paddingHorizontal:12,
        fontWeight: "600",
        marginTop:4 
    },
    about: {
        fontSize:13,
        paddingHorizontal:10,
        fontWeight:"500",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20,
        textAlign:'justify',
    }
});
