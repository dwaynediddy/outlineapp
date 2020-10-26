import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../screens/constant/colors'

const Header = prop => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{prop.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: colors.secondary,
        fontSize: 18,
    }
})

export default Header