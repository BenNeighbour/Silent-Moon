import React, { FunctionComponent } from "react";
import { ScrollView, Text, View } from "react-native";
import RecommendedCard from "./card/RecommendedCard";
import { styles } from "./RecommendedSection.styles";

interface Props { }

const RecommendedSection: FunctionComponent<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended for you</Text>

            <ScrollView contentContainerStyle={{
                justifyContent: 'space-evenly',
                paddingHorizontal: 10
            }}
                horizontal
                alwaysBounceHorizontal
                bounces
                showsHorizontalScrollIndicator={false} 
                showsVerticalScrollIndicator={false}>
                {
                    Array.from({ length: 10 }, (_, k) => (
                        <RecommendedCard key={k} />
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default RecommendedSection;