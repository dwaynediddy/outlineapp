import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is OVER!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number chosen: {props.userNumber}</Text>
            <Button title="Play Again" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen

