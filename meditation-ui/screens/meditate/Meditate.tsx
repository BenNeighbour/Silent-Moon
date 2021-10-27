import React, { Fragment, FunctionComponent } from "react";
import { StatusBar, ScrollView, View, Text } from "react-native";
import { Queue } from "react-native-spacing-system";
import { CircularButton } from "../../components/circularButton";
import { styles } from "./Meditate.styles";
import All from "../../assets/meditateCategories/All.svg";
import Anxious from "../../assets/meditateCategories/Anxious.svg";
import Heart from "../../assets/meditateCategories/Heart.svg";
import Kids from "../../assets/meditateCategories/Kids.svg";
import Sleep from "../../assets/meditateCategories/Sleep.svg";
import { PlayCardBanner } from "../../components/playCardBanner";
import DailyBackground from "./svg/DailyBackground.svg";

interface Props { }

const categories = [
    {
        icon: All,
        name: "All"
    },
    {
        icon: Heart,
        name: "My"
    },
    {
        icon: Anxious,
        name: "Anxious"
    },
    {
        icon: Sleep,
        name: "Sleep"
    },
    {
        icon: Kids,
        name: "Kids"
    },
]

const Meditate: FunctionComponent<Props> = () => {
    return (
        <View>
            <StatusBar barStyle="dark-content" />

            <ScrollView style={styles.container} alwaysBounceVertical={false} bounces={false}>
                <View style={styles.mainSection}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>Meditate</Text>
                        <Text style={styles.subtitle}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>
                    </View>

                    <ScrollView contentContainerStyle={{
                        justifyContent: 'space-evenly'
                    }}
                        horizontal
                        alwaysBounceHorizontal
                        bounces
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        {
                            categories.map((each: any, i: number) => (
                                <Fragment key={i}>
                                    <Queue size={5} />
                                    <CircularButton active={i === 0} icon={each.icon} label={each.name} />
                                </Fragment>
                            ))
                        }
                    </ScrollView>

                    <PlayCardBanner title={"Daily Calm"} contentColor={"dark"} leftSubtext={"Apr 30"} backgroundColor={"#F1DDCF"} rightSubtext={"Pause Practice"} background={DailyBackground} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Meditate;