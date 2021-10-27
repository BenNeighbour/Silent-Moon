import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10, 
        padding: 20, 
        marginHorizontal: 20, 
        overflow: "hidden", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center"
    },
    cardTitle: {
        width: "100%",
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
        fontSize: 12,
        fontWeight: "300",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 12,
        overflow: "hidden",
        paddingVertical: 5
    },
});