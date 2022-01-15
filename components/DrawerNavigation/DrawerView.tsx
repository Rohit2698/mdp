{
    /*eslint-disable*/
}
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type DrawerViewProps = {
    props: DrawerContentComponentProps;
}

const DrawerView: FC<DrawerViewProps> = ({ props }) => {
    const { navigation } = props;
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("HomeNavigation")}>
                <View style={{ backgroundColor: 'red' }}>
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text>About</Text>
            </TouchableOpacity>
        </View>
    )
};

export default DrawerView;
