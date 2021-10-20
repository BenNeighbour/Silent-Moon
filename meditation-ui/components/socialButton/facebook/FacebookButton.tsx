import React, { FunctionComponent } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./FacebookButton.styles";
import { FacebookLogoSvg } from "./FacebookLogo";

interface Props {
    label: string;
    onPress: (e: any) => void;
    style?: StyleProp<ViewStyle>;
}

const FacebookButton: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({width: "100%"}, props.style)} >
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <SvgXml style={{position: "absolute", left: 40}} xml={FacebookLogoSvg} />
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FacebookButton;