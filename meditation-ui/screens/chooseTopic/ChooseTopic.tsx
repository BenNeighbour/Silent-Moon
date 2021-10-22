import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { BetterSleepCard, ImprovePerformanceCard, IncreaseHappinessCard, PersonalGrowthCard, ReduceAnxietyCard, ReduceStressCard } from "./cards";
import { styles } from "./ChooseTopic.styles";

interface Props { }

const ChooseTopic: FunctionComponent<Props> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>What brings you {"\n"}<Text style={styles.subtitle}>to Silent Moon?</Text></Text>
                <Text style={styles.details}>choose a topic to focus on</Text>
            </View>

            <View style={styles.optionsTable}>
                <View style={styles.column}>
                    <ReduceStressCard />
                    <IncreaseHappinessCard />
                    <PersonalGrowthCard />
                </View>
                <View style={styles.column}>
                    <ImprovePerformanceCard />
                    <ReduceAnxietyCard />
                    <BetterSleepCard />
                </View>
            </View>
        </View>
    );
};

export default ChooseTopic;