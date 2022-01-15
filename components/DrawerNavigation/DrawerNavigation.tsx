{
    /*eslint-disable*/
}
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AboutView from '../About/AboutView';
import HomeScreenNavigation from '../HomeScreen/HomeScreenNavigation';
import DrawerView from './DrawerView';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer independent>
            <Drawer.Navigator initialRouteName="HomeNavigation" drawerContent={(props) => <DrawerView props={props} />}>
                <Drawer.Screen options={{
                    title: 'Home',
                    headerShown: false,
                }} name="HomeNavigation" component={HomeScreenNavigation} />
                <Drawer.Screen name="About" component={AboutView} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default DrawerNavigation;
