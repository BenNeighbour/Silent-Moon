import React, { Component, FunctionComponent } from "react";
import { Text, View } from "react-native";
import { PlayButton } from "../playButton";
import { styles } from "./PlayCardBanner.styles";

interface Props {
    title: string;
    leftSubtext: string;
    contentColor?: "light" | "dark";
    backgroundColor: string;
    rightSubtext: string;
    background?: React.ComponentType<any> | null;
}

const PlayCardBanner: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: props.backgroundColor}, styles.container)}>
            {props.background ? <props.background style={{ position: "absolute" }} /> : null}

            <View style={{ flex: 2, width: "100%" }}>
                <Text style={Object.assign({color: props.contentColor === "dark" ? "#3F414E" : "#FFFFFF"}, styles.cardTitle)}>{props.title}</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={Object.assign({color: props.contentColor === "dark" ? "#5A6175" : "#EBEAEC"}, styles.subtitleText)}>{props.leftSubtext} • {props.rightSubtext}</Text>
                </View>
            </View>

            <PlayButton onPress={() => {}} {...props} />
        </View>
    );
};

export default PlayCardBanner;