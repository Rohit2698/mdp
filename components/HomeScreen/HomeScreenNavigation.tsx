{
    /*eslint-disable*/
}
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import AboutView from '../About/AboutView';
import DiscriptionView from './DescriptionView';
import HomeScreenView from './HomeScreen';

type HomeScreenNavigation = {
    navigation: DrawerNavigationHelpers;
}
const HomeScreenNavigation: FC<HomeScreenNavigation> = ({
    navigation
}) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer independent>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName='Home'>
                <Stack.Screen name="Home" component={(props) => <HomeScreenView drawer={navigation} navigation={props.navigation} />} />
                <Stack.Screen name="Description" component={DiscriptionView} />
                <Stack.Screen name="About" component={AboutView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeScreenNavigation;
