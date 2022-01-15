{
    /*eslint-disable*/
}
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

type DiscriptionViewProps = {
    navigation: StackNavigationProp<any, any>;
};
const DiscriptionView: FC<DiscriptionViewProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>DiscriptionView</Text>
            <Button title='Back' onPress={() => navigation.pop()} />
        </View>
    );
};

export default DiscriptionView;
