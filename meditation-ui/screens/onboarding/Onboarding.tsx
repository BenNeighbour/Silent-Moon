import React, { FunctionComponent } from "react";
import { View, Text, StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";
import { Background } from "./svg/Background";
import { Relaxing } from "./svg/Relaxing";
import { styles } from "./Onboarding.styles";
import { Button } from "../../components/button";
import { useNavigation } from "@react-navigation/core";
import { LogoDark } from "../../components/logo/LogoDarkSvg";

interface Props { }

const Onboarding: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.topSection}>
                {/* Top Section */}
                <SvgXml style={styles.logo} xml={LogoDark} width="170px" />
                <SvgXml style={styles.background} xml={Background} width="100%" />
                <SvgXml style={{ zIndex: 2 }} xml={Relaxing} />
            </View>

            <View style={styles.bottomSection}>
                {/* Subtitle Section */}
                <View style={styles.subtitleSection}>
                    <Text style={styles.title}>We are what we do</Text>
                    <Text style={styles.subtitle}>Thousands of people are using silent moon for meditation</Text>
                </View>

                <View style={styles.callToAction}>
                    {/* Call-to-action Section */}
                    <Button label={"Sign Up"} onPress={() => navigation.navigate("Signup")} />
                    <Text style={styles.logInText}>Already have an account? <Text style={styles.logInTextLink} onPress={() => { 
                        {/* Redirect to login route */}
                        navigation.navigate("Login");
                    }}>Log In</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;
