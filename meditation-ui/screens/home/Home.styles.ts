import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        alignItems: "center"
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
    mainSection: {
        display: "flex",
        width: "100%",
        paddingHorizontal: 20,
        alignContent: "center",
        flex: 1,
        height: "100%"
    }
});