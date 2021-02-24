import {StyleSheet} from 'react-native';

export const colors = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lightHl: "#888",
    text: "#fff",
    textSec: "#aaa",
    icon: '#605cb8',
    sunny:'#FA8607',
}

export const gs = StyleSheet.create({

    sectionContainer : {
        paddingVertical: 0,
        paddingHorizontal: 2,
        marginBottom: 8,
        backgroundColor: colors.lightBg,
    },

    sectionTitle: {
        fontWeight:"700",
        color: colors.text,
        fontSize:15,
        paddingHorizontal: 6,
    },

    rowCenter: {
        flexDirection: "row",
        alignItems:"center",
    },

    rowBetween: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    
    center: {
        alignItems:'center',
        justifyContent:'center'
    },

    title: {
        color: colors.text,
        fontSize:30,
    },

    divider: {
        borderBottomColor:'#444',
        borderBottomWidth: 2,
        marginVertical:10,
    },
})