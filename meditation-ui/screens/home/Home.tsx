import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { LogoDark } from "../../components/logo/LogoDarkSvg";
import { styles } from "./Home.styles";
import RecommendedSection from "./recommendedSection/RecommendedSection";

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

                {/* MUSIC SECTION */}
                <View>
                </View>

                {/* RECOMMENDED SECTION */}
                <RecommendedSection />
            </View>
        </View>
    );
};

export default Home;