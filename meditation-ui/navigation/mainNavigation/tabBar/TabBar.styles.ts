import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        display: "flex",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        borderColor: "transparent",
        elevation: 24,
    },
    tab: {
        overflow: "visible",
        position: "relative",
        display: "flex",
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 13,
        paddingHorizontal: 10,
    },
    tabLogo: {
        paddingVertical: 10, 
        paddingHorizontal: 10, 
        borderRadius: 18
    },
    tabLabel: {
        fontSize: 14, 
        fontWeight: "bold", 
        paddingTop: 5
    }
});