import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  return (
    <View style={styles.rootScreen}>
      <Title>Indovina il numero</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Lower or higher?</Text>
        {/*  +- */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 40,
  },
});
