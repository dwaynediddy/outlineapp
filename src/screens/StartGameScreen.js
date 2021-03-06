import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
     } from 'react-native'

import Card from '../components/Card'
import colors from './constant/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {
    //need to save numbers
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler =() => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number you donkey!',
                 'number between 1 and 99',
                [{text: 'okay', style: 'destructive', onPress:resetInputHandler}]
                );
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }
    
    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>Chosen Numero is: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title=" START GAME" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
    )}
        
    return (
        //number pad not showing up, this is to dismiss pad when screen clicked 
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType='number-pad' 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.ButtonContainer}>
                        <View style={styles.button}>
                            <Button 
                            title='reset'
                             onPress={resetInputHandler} 
                             color={colors.secondary}/>
                        </View>
                        <View style={styles.button} >
                            <Button 
                            title='confirm' 
                            onPress={confirmInputHandler} 
                            color={colors.secondary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titles: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
       
    },
     ButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        width: 100,
        textAlign: 'center'
    }, summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
})

export default StartGameScreen
