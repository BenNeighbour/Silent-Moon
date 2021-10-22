import { Platform, StatusBar, StyleSheet } from "react-native";

export let styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    welcomeBack: {
        color: "#3F414E",
        fontSize: 29,
        fontWeight: "bold",
        paddingVertical: 20
    },
    loginWithEmailText: {
        textTransform: "uppercase",
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#A1A4B2",
        fontWeight: "bold",
        paddingVertical: 12
    },
    formSection: {
        width: "100%",
        display: "flex",
    },
    callToAction: {
        display: "flex",
        position: "relative",
        margin: "auto",
        width: "100%",
        marginTop: "auto",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "flex-end",
    },
    signUpText: {
        textTransform: "uppercase",
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#A1A4B2",
        fontWeight: "400",
        paddingVertical: 20,
    },
    signUpTextLink: {
        color: "#8E97FD"
    },
    topSection: {
        width: "100%",
        alignItems: "flex-start",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    topSectionBackdrop: {
        position: 'absolute',
        top: -20,
        left: 0,
        right: 16,
        bottom: 0,
    },
    mainSection: {
        height: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        width: "100%",
        alignItems: "center",
    }
});