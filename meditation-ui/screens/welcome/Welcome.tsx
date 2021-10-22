import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Button } from "../../components/button";
import { LogoLight } from "../../components/logo/LogoLightSvg";
import { RelaxingBackground } from "./svg/RelaxingBackgroundSvg";
import { Relaxing } from "./svg/RelaxingSvg";
import { styles } from "./Welcome.styles";

interface Props { }

const Welcome: FunctionComponent<Props> = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                {/* Top Section */}
                <SvgXml style={styles.logo} xml={LogoLight} width="170px" />
            </View>

            <View style={styles.titleSection}>
                <Text style={styles.title}>Hi Afsar, Welcome {"\n"}<Text style={styles.subtitle}>to Silent Moon</Text></Text>
                <Text style={styles.details}>Explore the app, Find some peace of mind {"\n"}to prepare for meditation.</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.pictureSection}>
                    <SvgXml style={{ zIndex: 10 }} xml={Relaxing} />
                    <SvgXml style={{ position: "absolute", zIndex: 2 }} xml={RelaxingBackground} />
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