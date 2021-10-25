import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { Pressable } from "react-native";
import { styles } from "./BackButton.styles";
import BackButtonArrow from "./BackButton.svg";

interface Props { }

const BackButton: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.container}>
            <BackButtonArrow />
        </Pressable>
    );
};

export default BackButton;