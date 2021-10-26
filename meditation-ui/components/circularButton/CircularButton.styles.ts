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
        alignContent: "center"
    },
    tabLogo: {
        paddingVertical: 20,
        alignSelf: "center",
    },
    tabLabel: {
        fontSize: 16,
        fontWeight: "400",
        paddingTop: 10,
        width: 65,
        textAlign: "center",
    },
    hoverBackground: {
        position: "absolute",
        height: 65,
        width: 65,
        alignSelf: "center",
        borderRadius: 25,
    } 
});