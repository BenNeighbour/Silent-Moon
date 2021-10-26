import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardTitle: {
        width: "100%",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 19,
    },
    subtitleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    subtitleText: {
        display: "flex",
        flex: 1,
        textTransform: "uppercase",
        color: "#EBEAEC",
        fontSize: 12,
        fontWeight: "300",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 12,
        overflow: "hidden",
        paddingVertical: 5
    },
});