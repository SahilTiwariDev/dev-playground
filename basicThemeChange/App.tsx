import { View, Text, useColorScheme, StyleSheet } from 'react-native';
import React from 'react';
export default function App() {
  const theme = useColorScheme() === 'dark';
  return (
    <View
      style={[styles.container, theme ? styles.darkMode : styles.lightMode]}
    >
      {' '}
      <Text
        style={[
          styles.text,
          theme ? styles.darkModeText : styles.lightModeText,
        ]}
      >
        {' '}
        App{' '}
      </Text>{' '}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: 24,
  },
  darkMode: {
    backgroundColor: '#ffffff',
  },
  lightMode: {
    backgroundColor: '#212121',
  },
  darkModeText: {
    color: '#212121',
  },
  lightModeText: {
    color: '#ffffff',
  },
});
