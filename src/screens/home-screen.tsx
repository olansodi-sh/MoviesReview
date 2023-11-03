import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../navigation/stack-navigation';
const HomeScreen = () => {

    const navigation = useNavigation<RootStackParamList>()
  return (
   <React.Fragment>
        <Text>Home Screen</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen')}
        >
            <Text>Go to Detail Screen</Text>
        </TouchableOpacity>
    </React.Fragment>
  )
}

export default HomeScreen