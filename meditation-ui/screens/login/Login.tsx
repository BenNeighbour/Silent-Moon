import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BackButton } from "../../components/backButton";
import { FacebookButton, GoogleButton } from "../../components/socialButton";
import { SignIn } from "../../service";
import LoginForm from "./form/LoginForm";
import { styles } from "./Login.styles";
import TopSection from "./TopSection/TopSection.svg";

interface Props { }

const Login: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.topSection}>
                <TopSection style={styles.topSectionBackdrop} />
                <BackButton />
            </View>

            <KeyboardAwareScrollView style={{ height: "100%", width: "100%" }}>
                <View style={styles.mainSection}>
                    <Text style={styles.welcomeBack}>Welcome Back!</Text>

                    {/* GOOGLE/FACEBOOK SSO BUTTONS */}
                    <FacebookButton label={"Continue with Facebook"} onPress={() => { }} />
                    <GoogleButton label={"Continue with Google"} onPress={() => navigation.navigate("MainNavigator")} />

                    <Text style={styles.loginWithEmailText}>Or log in with email</Text>
                    <View style={styles.formSection}>
                        {/* LOGIN FORM SECTION */}
                        <LoginForm onSubmit={(fields) => SignIn(fields, navigation)} />
                    </View>

                </View>
            </KeyboardAwareScrollView>
            <View style={styles.callToAction}>
                {/* Call-to-action Section */}
                <Text style={styles.signUpText}>Don't already have an account? <Text style={styles.signUpTextLink} onPress={() => {
                    {/* Redirect to signup route */ }
                    navigation.navigate("Signup");
                }}>Sign Up</Text></Text>
            </View>
        </View>
    );
};

export default Login;