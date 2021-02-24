import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import page1 from './src/screens/Quiz';
import Type from './src/screens/Type';
import page3 from './src/screens/FinalScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginInScreen';
import SignInScreen from './src/screens/SignInScreen';
import Genre from './src/screens/Genre';
import LeaderBoard from './src/screens/LeaderBoard';

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
          component={page1}
          name="page1"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={page3}
          name="page3"
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
