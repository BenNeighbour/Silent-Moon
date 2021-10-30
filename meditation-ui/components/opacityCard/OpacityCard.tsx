import React, { createRef, FunctionComponent, useEffect, useState } from "react";
import { findNodeHandle, Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./OpacityCard.styles";

interface Props {
    title: string;
    background: ImageSourcePropType;
}

const OpacityCard: FunctionComponent<Props> = (props) => {
    return (
        <View
            style={styles.container}
        >
            <Image source={props.background} />
            <View style={{ position: "absolute", backgroundColor: "transparent", bottom: 0, width: "100%", paddingHorizontal: 20, paddingVertical: 15 }}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    );
};

export default OpacityCard;