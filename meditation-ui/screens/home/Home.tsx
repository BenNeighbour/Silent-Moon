import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { LogoDark } from "../../components/logo/LogoDarkSvg";
import { styles } from "./Home.styles";
import HomeCard from "./homeCard/HomeCard";
import RecommendedSection from "./recommendedSection/RecommendedSection";
import Basics from "./homeCard/svg/Basics.svg";
import Relaxation from "./homeCard/svg/Relaxation.svg";
import { Queue } from "react-native-spacing-system";

interface Props { }

const Home: FunctionComponent<Props> = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.topSection}>
                {/* Top Section */}
                <SvgXml style={styles.logo} xml={LogoDark} width="170px" />
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

                {/* RECOMMENDED SECTION */}
                <RecommendedSection />
            </View>
        </View>
    );
};

export default Home;