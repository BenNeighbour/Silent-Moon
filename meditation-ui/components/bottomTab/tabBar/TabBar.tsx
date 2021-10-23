import { useLinkProps } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import HomeIcon from '../screenIcons/HomeIcon.svg';
import SleepIcon from '../screenIcons/SleepIcon.svg';
import MeditateIcon from '../screenIcons/MeditateIcon.svg';
import MusicIcon from "../screenIcons/MusicIcon.svg";
import { styles } from "./TabBar.styles";

interface Props {
    state: any;
    descriptors: any;
    navigation: any;
}

const TabBar: FunctionComponent<any> = ({ state, descriptors, navigation }) => {

    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const icon = route.name === "Home" ? <HomeIcon fill={isFocused ? "#FFFFFF" : "#A0A3B1"} /> : route.name === "Sleep" ? <SleepIcon fill={isFocused ? "#FFFFFF" : "#A0A3B1"} /> : route.name === "Meditate" ? <MeditateIcon fill={isFocused ? "#FFFFFF" : "#A0A3B1"} /> : <MusicIcon fill={isFocused ? "#FFFFFF" : "#A0A3B1"} />;

                return (
                    <Pressable
                        key={index}
                        accessibilityRole="link"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab}
                    >
                        <View style={{ backgroundColor: isFocused ? "#8E97FD" : "transparent", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 18 }}>
                            {icon}
                        </View>
                        <Text style={{ color: isFocused ? "#8E97FD" : "#A0A3B1", fontSize: 14, fontWeight: "bold", paddingTop: 5 }}>
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default TabBar;