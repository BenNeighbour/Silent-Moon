import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
    },
    topSection: {
        display: "flex",
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "transparent",
    },
    logo: {
        zIndex: 3,
        margin: 'auto',
        position: "relative",
        paddingVertical: 35
    },
    mainSection: {
        display: "flex",
        width: "100%",
        alignContent: "center",
        flex: 1,
        height: "100%",
        marginTop: 10
    },
    title: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 29,
    },
    details: {
        width: "100%",
        color: "#A1A4B2",
        fontWeight: "100",
        fontSize: 19,
    }
});