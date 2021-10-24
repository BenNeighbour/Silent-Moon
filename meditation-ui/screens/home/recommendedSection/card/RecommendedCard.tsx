import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../RecommendedSection.styles";
import Thumbnail from "./Focus.png";

interface Props { }

const RecommendedCard: FunctionComponent<Props> = () => {
    return (
        <View style={{padding: 10}}>
            <Image source={Thumbnail} style={{
                backgroundColor: "#AFDBC5",
                borderRadius: 10,
            }} />

            <View style={styles.cardMetadataContainer}>
                <Text style={styles.cardTitle}>Focus</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>Meditation • 3-10 min</Text>
                </View>
            </View>
        </View>
    );
};

export default RecommendedCard;