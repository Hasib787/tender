import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>  

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes:{
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 5.46,
            elevation: 9,
  }
});
