import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./DailyMeditationCard.styles";
import Background from "./DailyMeditationBackground.svg";

interface Props {
    title: string;
    type: string;
    contentColor: "light" | "dark";
    backgroundColor: string;
    duration: string;
}

const DailyMeditationCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={{ backgroundColor: props.backgroundColor, borderRadius: 10, padding: 20, marginHorizontal: 20, overflow: "hidden"}}>
           <Background style={{ position: "absolute" }} />

            <Text style={styles.cardTitle}>{props.title}</Text>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>{props.type} • {props.duration}</Text>
            </View>
        </View>
    );
};

export default DailyMeditationCard;