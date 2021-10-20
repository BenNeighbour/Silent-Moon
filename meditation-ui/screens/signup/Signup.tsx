import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { BackButton } from "../../components/backButton";
import { FacebookButton, GoogleButton } from "../../components/socialButton";
import { TopSection } from "../login/TopSection/TopSectionSvg";
import SignupForm from "./form/SignupForm";
import { styles } from "./Signup.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/core";

interface Props { }

const Signup: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <SvgXml style={styles.topSectionBackdrop} xml={TopSection} />
                <BackButton />
            </View>

            <KeyboardAwareScrollView style={{ height: "100%", width: "100%" }}>
                <View style={styles.mainSection}>
                    <Text style={styles.welcomeBack}>Create your account</Text>

                    {/* GOOGLE/FACEBOOK SSO BUTTONS */}
                    <FacebookButton label={"Continue with Facebook"} onPress={() => { }} />
                    <GoogleButton label={"Continue with Google"} onPress={() => { }} />

                    <Text style={styles.loginWithEmailText}>Or log in with email</Text>
                    <View style={styles.formSection}>
                        {/* SIGNUP FORM SECTION */}
                        <SignupForm onSubmit={() => {
                            navigation.navigate("Welcome");
                        }} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default Signup;