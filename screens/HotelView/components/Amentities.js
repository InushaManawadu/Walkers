import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import {gs, colors} from '../../../styles'

export default function Amentities() {
    return (
        <View style={styles.container}>
            <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle, styles.head}>Facilities</Text>
            <View style={styles.amentitiesContainer}>
                
                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Feather name="wifi" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Wifi</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Hotel Restaurant</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <FontAwesome5 name="swimmer" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Swimming Pool</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Entypo name="drink" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Bar</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Ionicons name="ios-car" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Parking</Text>
                </View>

                <View style={styles.amentityContainer}>
                    <View style={styles.amentity}>
                        <Feather name="speaker" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amentityName}>Night Club</Text>
                </View>
            </View>
            </View>
        </View>     
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop:10,
    },

    head: {
        paddingHorizontal:10,
        fontWeight:"700",
        color: colors.text,
        fontSize:15,
        // paddingHorizontal: 6,
    },

    amentitiesContainer: {
        paddingHorizontal:1,
        marginTop:16,
        marginHorizontal:12,
        ...gs.rowBetween,
        flexWrap:"wrap"
    },
    
    amentityContainer: {
        alignItems: "center",
        width:95,
        marginVertical: 12
    },

    amentity: {
        width:48,
        height:48,
        borderRadius: 24,
        ...gs.center,
        backgroundColor:"#444"
    }, 

    amentityName: {
        color: colors.lightHl,
        fontSize:12,
        fontWeight:"600",
        marginTop:6,
        textAlign:"center"
    }

})
