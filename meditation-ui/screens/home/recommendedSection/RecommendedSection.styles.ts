import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
    },
    title: {
        width: "100%",
        color: "#3F414E",
        fontWeight: "bold",
        fontSize: 24,
        paddingHorizontal: 20,
    },
    cardTitle: {
        width: "100%",
        color: "#3F414E",
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
        color: "#A1A4B2",
        fontSize: 12,
        fontWeight: "300",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 12,
        overflow: "hidden",
        paddingVertical: 5
    },
    cardMetadataContainer: {
        paddingVertical: 10,
        paddingHorizontal: 7,
    }
});