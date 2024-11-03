
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SelectColorScreen from './components/SelectColorScreen';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen  name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SelectColor" component={SelectColorScreen} options={{headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
