import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./BackButton.styles";
import { BackButtonArrow } from "./BackButtonSvg";

interface Props { }

const BackButton: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.container}>
            <SvgXml style={{ zIndex: 2, margin: "auto" }} xml={BackButtonArrow} />
        </Pressable>
    );
};

export default BackButton;