import { useLinkProps } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import HomeIcon from '../screenIcons/HomeIcon.svg'; /* @ts-ignore */
import SleepIcon from '../screenIcons/SleepIcon.svg'; /* @ts-ignore */
import MeditateIcon from '../screenIcons/MeditateIcon.svg'; /* @ts-ignore */
import MusicIcon from "../screenIcons/MusicIcon.svg" /* @ts-ignore */

interface Props {
    state: any;
    descriptors: any;
    navigation: any;
}

const TabBar: FunctionComponent<any> = ({ state, descriptors, navigation }) => {    
    
    return (
        <View style={{
            flexDirection: 'row',
            display: "flex",
            width: "100%",
            
            // Shadow
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            borderColor: "transparent",
            elevation: 24,
        }}>
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
                            style={{
                                overflow: "visible",
                                position: "relative",
                                display: "flex",
                                flex: 1,
                                backgroundColor: "white",
                                alignItems: "center",
                                paddingVertical: 13,
                                paddingHorizontal: 10,
                            }}
                            
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