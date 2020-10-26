import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    }
})

export default Card