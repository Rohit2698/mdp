import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreenView from './components/HomeScreen/HomeScreen';
import SplashScreenView from './components/SplashScreen/SplashScreenView';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreenView} />
        <Stack.Screen name="Home" component={HomeScreenView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
