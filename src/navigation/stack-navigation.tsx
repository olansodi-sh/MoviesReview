import React from 'react'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import DetailScreen from '../screens/detail-screen';

export type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: undefined;
    navigation: StackNavigationProp<RootStackParamList>;
    navigate: any;
    };

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
export default StackNavigation