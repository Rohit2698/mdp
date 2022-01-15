{
    /*eslint-disable*/
}
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';

type AboutViewProps = {
    navigation: StackNavigationProp<any, any>;
};
const AboutView: FC<AboutViewProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "red" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>AboutView</Text>
        </View>
    );
};

export default AboutView;
