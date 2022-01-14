{
    /*eslint-disable*/
}
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';

type HomeScreenViewProps = {
    navigation: StackNavigationProp<any, any>;
};
const HomeScreenView: FC<HomeScreenViewProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>HomeScreenView</Text>
        </View>
    );
};

export default HomeScreenView;
