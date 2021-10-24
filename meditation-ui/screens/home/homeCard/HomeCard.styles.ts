import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: "hidden",
        flex: 1,
        height: "100%"
    },
    mainSection: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 15,
        paddingVertical: 20,
        paddingTop: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    type: {
        fontSize: 11,
        textTransform: "uppercase"
    },
    duration: {
        fontSize: 11,
        textTransform: "uppercase",
    },
    leftSide: {
        display: "flex",
        flex: 3,
    },
    rightSide: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});