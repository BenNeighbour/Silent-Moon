import { Platform, StatusBar, StyleSheet } from "react-native";

export let styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
        backgroundColor: "#FFF"
    },
    topSection: {
        display: "flex",
        width: "100%",
        paddingTop: 35,
        paddingHorizontal: 10
    },
    title: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 29,
    },
    subtitle: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "100",
        fontSize: 28,
    },
    details: {
        width: "100%",
        color: "#A1A4B2",
        fontWeight: "100",
        fontSize: 20,
        marginVertical: 10
    },
    optionsTable: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignContent: "stretch"
    },
    column: {
        flex: 1,
        display: "flex",
        paddingHorizontal: 10,
    },
});
