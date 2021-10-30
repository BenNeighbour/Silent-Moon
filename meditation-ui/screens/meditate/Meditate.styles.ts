import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    mainSection: {
        display: "flex",
        width: "100%",
        flex: 1,
        height: "100%",
        marginTop: 10,        
    },
    title: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 29,
        textAlign: "center",
        padding: 5
    },
    subtitle: {
        width: "100%",
        color: "#A0A3B1",
        fontWeight: "100",
        fontSize: 16,
        textAlign: "center"
    },
    titleSection: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    optionsTable: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignContent: "stretch",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    column: {
        flex: 1,
        display: "flex",
    },
});