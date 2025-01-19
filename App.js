import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function App() {
  const [topHeight, setTopHeight] = useState(height / 2);
  const [bottomHeight, setBottomHeight] = useState(height / 2);
  const [winner, setWinner] = useState(null);

  // Animated values for flashing effect
  const topFlash = useRef(new Animated.Value(0)).current;
  const bottomFlash = useRef(new Animated.Value(0)).current;

  // Flash animation
  const flash = (animatedValue) => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleTopTap = () => {
    if (winner) return;
    if (bottomHeight <= 20) {
      setWinner('Top Player Wins!');
      return;
    }
    setTopHeight(topHeight + 20);
    setBottomHeight(bottomHeight - 20);
    flash(topFlash); // Trigger flash animation for top half
  };

  const handleBottomTap = () => {
    if (winner) return;
    if (topHeight <= 20) {
      setWinner('Bottom Player Wins!');
      return;
    }
    setBottomHeight(bottomHeight + 20);
    setTopHeight(topHeight - 20);
    flash(bottomFlash); // Trigger flash animation for bottom half
  };

  const resetGame = () => {
    setTopHeight(height / 2);
    setBottomHeight(height / 2);
    setWinner(null);
  };

  // Interpolating the animated values to create color transitions
  const topBackgroundColor = topFlash.interpolate({
    inputRange: [0, 1],
    outputRange: ['#87CEEB', '#1E90FF'], // Normal to flash color
  });

  const bottomBackgroundColor = bottomFlash.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FF6F61', '#FF4500'], // Normal to flash color
  });

  return (
    <View style={styles.container}>
      {winner && (
        <View style={styles.winnerBanner}>
          <Text style={styles.winnerText}>{winner}</Text>
          <View style={styles.resetButton} onTouchEnd={resetGame}>
            <Text style={styles.resetText}>Play Again</Text>
          </View>
        </View>
      )}
      <Animated.View
        style={[styles.topHalf, { height: topHeight, backgroundColor: topBackgroundColor }]}
        onStartShouldSetResponder={() => true}
        onResponderRelease={handleTopTap}
      >
        <Text style={styles.tapText}>Tap!</Text>
      </Animated.View>
      <Animated.View
        style={[styles.bottomHalf, { height: bottomHeight, backgroundColor: bottomBackgroundColor }]}
        onStartShouldSetResponder={() => true}
        onResponderRelease={handleBottomTap}
      >
        <Text style={styles.tapText}>Tap!</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHalf: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomHalf: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tapText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
  winnerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 10,
  },
  resetText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});
