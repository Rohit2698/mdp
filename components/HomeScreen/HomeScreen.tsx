{
    /*eslint-disable*/
}
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';

type HomeScreenViewProps = {
    navigation: StackNavigationProp<any, any>;
    drawer: DrawerNavigationHelpers;
};
const HomeScreenView: FC<HomeScreenViewProps> = ({ navigation, drawer }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>HomeScreenView</Text>
            <Button title='Description(Stack)' onPress={() => navigation.navigate("Description")} />
            <View style={{ marginTop: 30 }}>
                <Button title='AboutUs(Drawer)' onPress={() => navigation.navigate("About")} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Button title='Open(Drawer)' onPress={() => drawer.openDrawer()} />
            </View>
        </View>
    );
};

export default HomeScreenView;
