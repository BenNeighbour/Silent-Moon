import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgXml } from "react-native-svg";
import { BackButton } from "../../components/backButton";
import { FacebookButton, GoogleButton } from "../../components/socialButton";
import LoginForm from "./form/LoginForm";
import { styles } from "./Login.styles";
import { TopSection } from "./TopSection/TopSectionSvg";

interface Props { }

const Login: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <SvgXml style={styles.topSectionBackdrop} xml={TopSection} />
                <BackButton />
            </View>

            <KeyboardAwareScrollView style={{ height: "100%", width: "100%" }}>
                <View style={styles.mainSection}>
                    <Text style={styles.welcomeBack}>Welcome Back!</Text>

                    {/* GOOGLE/FACEBOOK SSO BUTTONS */}
                    <FacebookButton label={"Continue with Facebook"} onPress={() => { }} />
                    <GoogleButton label={"Continue with Google"} onPress={() => { }} />

                    <Text style={styles.loginWithEmailText}>Or log in with email</Text>
                    <View style={styles.formSection}>
                        {/* LOGIN FORM SECTION */}
                        <LoginForm />
                    </View>

                    <View style={styles.callToAction}>
                        {/* Call-to-action Section */}
                        <Text style={styles.signUpText}>Dont't already have an account? <Text style={styles.signUpTextLink} onPress={() => {
                            {/* Redirect to signup route */ }
                            navigation.navigate("Signup");
                        }}>Sign Up</Text></Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default Login;