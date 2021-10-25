import React, { FunctionComponent } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./GoogleButton.styles";
import GoogleLogo from "./GoogleLogo.svg";

interface Props {
    label: string;
    onPress: (e: any) => void;
    style?: StyleProp<ViewStyle>;
}

const GoogleButton: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({width: "100%"}, props.style)} >
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <GoogleLogo style={{position: "absolute", left: 35}} />
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GoogleButton;