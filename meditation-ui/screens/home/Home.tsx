import React, { FunctionComponent } from "react";
import { StatusBar, ScrollView, View, Text } from "react-native";
import { Queue } from "react-native-spacing-system";
import LogoDark from "../../components/logo/LogoDark.svg";
import { styles } from "./Home.styles";
import DailyMeditationCard from "./homeCard/dailyMeditationCard/DailyMeditationCard";
import HomeCard from "./homeCard/HomeCard";
import Basics from "./homeCard/svg/Basics.svg";
import Relaxation from "./homeCard/svg/Relaxation.svg";
import RecommendedSection from "./recommendedSection/RecommendedSection";

interface Props { }

const Home: FunctionComponent<Props> = () => {
    return (
        <View>
            <StatusBar barStyle="dark-content" />

            <ScrollView style={styles.container} alwaysBounceVertical={false} bounces={false}>
                <View style={styles.topSection}>
                    {/* Top Section */}
                    <LogoDark style={styles.logo} width="170px" />
                </View>

                <View style={styles.mainSection}>
                    <Text style={styles.title}>Good Morning, Asfar</Text>
                    <Text style={styles.details}>We Wish you have a good day</Text>

                    {/* CARD SECTION */}
                    <View style={styles.cardSection}>
                        <HomeCard title={"Basics"} contentColor={"light"} type={"Course"} backgroundColor={"#8E97FD"} duration={"3-10 min"} svg={Basics} />
                        <Queue size={20} />
                        <HomeCard title={"Relaxation"} contentColor={"dark"} type={"Music"} backgroundColor={"#FFDB9D"} duration={"3-10 min"} svg={Relaxation} />
                    </View>

                    <DailyMeditationCard title={"Daily Thought"} contentColor={"dark"} type={"Meditation"} backgroundColor={"#444359"} duration={"3-10 min"} />

                    {/* RECOMMENDED SECTION */}
                    <RecommendedSection />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;