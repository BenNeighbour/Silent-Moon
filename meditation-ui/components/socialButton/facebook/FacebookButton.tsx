import React, { FunctionComponent } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./FacebookButton.styles";
import FacebookLogo from "./FacebookLogo.svg";

interface Props {
    label: string;
    onPress: (e: any) => void;
    style?: StyleProp<ViewStyle>;
}

const FacebookButton: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({width: "100%"}, props.style)} >
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <FacebookLogo style={{position: "absolute", left: 40}} />
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FacebookButton;