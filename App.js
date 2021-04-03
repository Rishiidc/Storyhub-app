import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default function App() {
  return(
    <Appcontainer/>
  )   
}
const ReadStory = createBottomTabNavigator({
  ReadStory : {screen : ReadStoryScreen},
  WriteStory : {screen : WriteStoryScreen}
})
const Appcontainer = createAppContainer(ReadStory)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
