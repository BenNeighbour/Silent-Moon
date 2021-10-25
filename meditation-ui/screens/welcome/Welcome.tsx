import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { Button } from "../../components/button";
import LogoLight from "../../components/logo/LogoLight.svg";
import Relaxing from "./svg/Relaxing.svg";
import RelaxingBackground from "./svg/RelaxingBackground.svg";
import { styles } from "./Welcome.styles";

interface Props { }

const Welcome: FunctionComponent<Props> = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                {/* Top Section */}
                <LogoLight style={styles.logo} />
            </View>

            <View style={styles.titleSection}>
                <Text style={styles.title}>Hi Afsar, Welcome {"\n"}<Text style={styles.subtitle}>to Silent Moon</Text></Text>
                <Text style={styles.details}>Explore the app, Find some peace of mind {"\n"}to prepare for meditation.</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.pictureSection}>
                    <Relaxing style={{ zIndex: 10 }} />
                    <RelaxingBackground style={{ position: "absolute", zIndex: 2 }} />
                </View>
            </View>

            <View style={styles.callToAction}>
                <Button color={"#EBEAEC"} textColor={"#3F414E"} label={"Get Started"} onPress={() => { 
                    navigation.navigate("ChooseTopic");
                }} />
            </View>

            <StatusBar barStyle="light-content" />
        </View>
    );
};

export default Welcome;