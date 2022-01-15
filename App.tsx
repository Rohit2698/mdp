import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerNavigation from './components/DrawerNavigation/DrawerNavigation';
import HomeScreenView from './components/HomeScreen/HomeScreen';
import SplashScreenView from './components/SplashScreen/SplashScreenView';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreenView} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
