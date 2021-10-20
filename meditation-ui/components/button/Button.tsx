import React, { FunctionComponent } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./Button.styles";

interface Props {
    label: string;
    onPress: (e: any) => void;
    style?: StyleProp<ViewStyle>;
    color?: string;
    textColor?: string;
}

const Button: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({width: "100%"}, props.style)}>
            <TouchableOpacity style={Object.assign({backgroundColor: `${props.color || "#8E97FD"}`}, styles.container)} onPress={props.onPress}>
                <Text style={Object.assign({color: `${props.textColor || "#F6F1FB"}`}, styles.text)}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;