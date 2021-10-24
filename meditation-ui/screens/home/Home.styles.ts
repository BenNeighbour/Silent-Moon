import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#FFFFFF", 
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
        paddingVertical: 20
    },
    mainSection: {
        display: "flex",
        width: "100%",
        flex: 1,
        height: "100%",
        marginTop: 10
    },
    title: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 29,
        paddingHorizontal: 20,
    },
    details: {
        width: "100%",
        color: "#A1A4B2",
        fontWeight: "100",
        fontSize: 19,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    cardSection: {
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
        width: "100%",
    },
    
});