import React, { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./CircularButton.styles";

interface Props { 
    label: string;
    icon: React.ComponentType<any>;
    active?: true | false;
}

const CircularButton: FunctionComponent<Props> = (props) => {
    return (
        <Pressable
            accessibilityRole="link"
            accessibilityState={props.active ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
            style={styles.tab}
        >
            <View style={styles.tabLogo}>
                <View style={Object.assign({ backgroundColor: props.active ? "#8E97FD" : "#A0A3B1" }, styles.hoverBackground)} />
                <props.icon />
            </View>
            <Text style={Object.assign({ color: props.active ? "#3F414E" : "#A0A3B1" }, styles.tabLabel)}>
                {props.label}
            </Text>
        </Pressable>
    );
};

export default CircularButton;