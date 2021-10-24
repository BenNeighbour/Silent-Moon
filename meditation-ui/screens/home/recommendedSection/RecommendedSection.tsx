import React, { FunctionComponent } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./RecommendedSection.styles";

interface Props {}

const RecommendedSection: FunctionComponent<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended for you</Text>

            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal>

            </ScrollView>
        </View>
    );
};

export default RecommendedSection;