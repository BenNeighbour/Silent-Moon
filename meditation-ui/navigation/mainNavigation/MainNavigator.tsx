import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from "react";
import { View } from 'react-native';
import { Home } from "../../screens/home";
import { Meditate } from '../../screens/meditate';
import TabBar from "./tabBar/TabBar";

const Tab = createBottomTabNavigator();

interface Props { }

const MainNavigator: FunctionComponent<Props> = () => {
    return (
        <Tab.Navigator initialRouteName={"Home"} tabBar={(props: any) => <TabBar {...props} />}>
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Sleep" component={View} />
            <Tab.Screen options={{ headerShown: false }} name="Meditate" component={Meditate} />
            <Tab.Screen options={{ headerShown: false }} name="Music" component={View} />
            <Tab.Screen options={{ headerShown: false }} name="Asfar" component={View} />
        </Tab.Navigator>
    );
};

export default MainNavigator;