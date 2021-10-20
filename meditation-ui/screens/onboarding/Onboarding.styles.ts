import { Platform, StatusBar, StyleSheet } from "react-native";

export let styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
    },
    bottomSection: {
        display: "flex",
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical: 40,
        alignContent: "center",
        flex: 1,
        height: "100%"
    },
    subtitleSection: {
        alignSelf: "auto",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flex: 1
    },
    title: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 30,
    },
    subtitle: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#A1A4B2",
        fontWeight: "100",
        fontSize: 16,
        paddingVertical: 5
    },
    topSection: {
        display: "flex",
        flex: 1,
        paddingVertical: 30,
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    logo: {
        zIndex: 3,
        margin: 'auto',
        position: "relative",
        paddingVertical: 35
    },
    background: {
        position: 'absolute',
        zIndex: 1,
        top: -20,
        height: "100%",
        width: "100%"
    },
    callToAction: {
        display: "flex",
        position: "relative",
        margin: "auto",
        width: "100%",
        marginTop: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    logInText: {
        textTransform: "uppercase",
        fontSize: 14,
        letterSpacing: 0.75,
        color: "#A1A4B2",
        fontWeight: "400",
        paddingVertical: 20
    },
    logInTextLink: {
        color: "#8E97FD"
    }
});
