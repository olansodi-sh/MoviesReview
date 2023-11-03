import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/stack-navigation';


const App = () => {
  return (
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
  )
}

export default App