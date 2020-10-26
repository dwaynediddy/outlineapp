
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';

import colors from './src/screens/constant/colors'
import Header from './src/components/Header'

//screens
import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'

function App () {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
//starting fresh when a games complete
  const configureNewGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/> 
  } else if (guessRounds > 0) {
    content = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onRestart={configureNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number'/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  }
})

export default App
