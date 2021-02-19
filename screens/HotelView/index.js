import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {colors} from '../../styles'
import Header from './components/Header'
import Bookmark from './components/Bookmark'

export default function index() {

    /*Full Screen */

    React.useEffect(() => {
        StatusBar.setBackgroundColor('#FF573300'); 
        StatusBar.setTranslucent(true)
       }, []);
  
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Header/>
            <View>
                <Bookmark/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    }
})
