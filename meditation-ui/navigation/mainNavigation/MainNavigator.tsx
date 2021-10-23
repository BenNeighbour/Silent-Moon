import React, { FunctionComponent } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../../screens/home";
import TabBar from "./tabBar/TabBar";

const Tab = createBottomTabNavigator();

interface Props { }

const MainNavigator: FunctionComponent<Props> = (props) => {
    return (
        <Tab.Navigator tabBar={(props: any) => <TabBar {...props} />}>
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Sleep" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Meditate" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Music" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Asfar" component={Home} />
        </Tab.Navigator>
    );
};

export default MainNavigator;