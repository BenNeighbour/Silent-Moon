import React, { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import HomeIcon from '../screenIcons/HomeIcon.svg';
import MeditateIcon from '../screenIcons/MeditateIcon.svg';
import MusicIcon from "../screenIcons/MusicIcon.svg";
import SleepIcon from '../screenIcons/SleepIcon.svg';
import UserIcon from "../screenIcons/UserIcon.svg";
import { styles } from "./TabBar.styles";

const TabBar: FunctionComponent = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

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
                        <View style={styles.tabLogo}>
                            <View style={Object.assign({backgroundColor: isFocused ? "#8E97FD" : "transparent"}, styles.hoverBackground)} />
                            {getTabLogo(route.name, isFocused)}
                        </View>
                        <Text style={Object.assign({ color: isFocused ? "#8E97FD" : "#A0A3B1" }, styles.tabLabel)}>
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

const getTabLogo = (name: string, isFocused: boolean) => {
    const { ...props } = { fill: isFocused ? "#FFFFFF" : "#A0A3B1" };

    return name === "Home" ? <HomeIcon {...props} /> :
        name === "Sleep" ? <SleepIcon {...props} /> :
            name === "Meditate" ? <MeditateIcon {...props} /> :
                name === "Music" ? <MusicIcon {...props} /> :
                    <UserIcon {...props} />
};

export default TabBar;