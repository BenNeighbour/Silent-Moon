import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: "hidden",
        flex: 1,
        height: "100%",
        display: "flex",
    },
    title: {
        fontSize: 18,
        lineHeight: 19,
        paddingVertical: 7,
        fontWeight: "bold"
    },
    type: {
        fontSize: 11,
        lineHeight: 12,
        textTransform: "uppercase"
    },
    duration: {
        fontSize: 11,
        flex: 1,
        lineHeight: 12,
        textTransform: "uppercase",
    },
});