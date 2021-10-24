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
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
    },
    tabLabel: {
        fontSize: 13,
        fontWeight: "400",
        paddingTop: 5
    },
    hoverBackground: {
        position: "absolute",
        height: 46,
        width: 46,
        alignSelf: "center",
        borderRadius: 18
    }
});