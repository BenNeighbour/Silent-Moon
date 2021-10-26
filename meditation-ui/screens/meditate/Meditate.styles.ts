import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    topSection: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "transparent",
    },
    logo: {
        zIndex: 3,
        margin: 'auto',
        position: "relative",
        paddingVertical: 30
    },
    mainSection: {
        display: "flex",
        width: "100%",
        flex: 1,
        height: "100%",
        marginTop: 10
    },
});