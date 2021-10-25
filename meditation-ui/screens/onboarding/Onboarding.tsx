import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { Button } from "../../components/button";
import LogoDark from "../../components/logo/LogoDark.svg";
import { styles } from "./Onboarding.styles";
import Background from "./svg/Background.svg";
import Relaxing from "./svg/Relaxing.svg";

interface Props { }

const Onboarding: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.topSection}>
                {/* Top Section */}
                <LogoDark style={styles.logo} />
                <Background style={styles.background} width="100%" />
                <Relaxing style={{ zIndex: 2 }} />
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
