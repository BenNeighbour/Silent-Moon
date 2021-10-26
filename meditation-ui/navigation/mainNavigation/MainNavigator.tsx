import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from "react";
import { Home } from "../../screens/home";
import { Meditate } from '../../screens/meditate';
import TabBar from "./tabBar/TabBar";

const Tab = createBottomTabNavigator();

interface Props { }

const MainNavigator: FunctionComponent<Props> = () => {
    return (
        <Tab.Navigator tabBar={(props: any) => <TabBar {...props} />}>
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Sleep" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Meditate" component={Meditate} />
            <Tab.Screen options={{ headerShown: false }} name="Music" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Asfar" component={Home} />
        </Tab.Navigator>
    );
};

export default MainNavigator;