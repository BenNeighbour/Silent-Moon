import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        backgroundColor: "#8E97FD",
        overflow: "hidden"
    },
    topSection: {
        display: "flex",
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        marginBottom: 35
    },
    logo: {
        zIndex: 3,
        margin: 'auto',
        position: "relative",
        paddingVertical: 35
    },
    titleSection: {
        display: "flex",
        zIndex: 20,
        position: "relative"
    },
    title: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#FFECCC",
        fontWeight: "bold",
        fontSize: 35,
        paddingVertical: 15
    },
    subtitle: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#FFECCC",
        fontWeight: "100",
        fontSize: 35,
    },
    details: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#EBEAEC",
        fontWeight: "100",
        fontSize: 16,
    },
    pictureSection: {
        overflow: "hidden"
    },
    bottomSection: {
        width: "100%",
        position: "relative",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "transparent",
        marginVertical: 50
    },
    callToAction: {
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        paddingHorizontal: 40,
        backgroundColor: "transparent",
        marginVertical: 40,
        justifyContent: "flex-end"
    }
});