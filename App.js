import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Quiz from './src/screens/Quiz/Quiz';
import Type from './src/screens/QuesType/Type';
import FinalScreen from './src/screens/LeaderBoard/FinalScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Auth/LoginInScreen';
import SignInScreen from './src/screens/Auth/SignInScreen';
import Genre from './src/screens/QuesType/Genre';
import LeaderBoard from './src/screens/LeaderBoard/LeaderBoard';

const Stack = createStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SignInScreen}
          name="SignInScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Type}
          name="Type"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Quiz}
          name="Quiz"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={FinalScreen}
          name="FinalScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LeaderBoard}
          name="LeaderBoard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Genre}
          name="Genre"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
