import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import ImprovePerformance from "./svg/ImprovePerformance.svg";

interface Props {}

const ImprovePerformanceCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({backgroundColor: "#FA6E5A"}, styles.container)}>
            <ImprovePerformance style={{marginVertical: 10, alignSelf: "center"}} />
            <Text style={Object.assign({color: "#FEF9F3"}, styles.title)}>Improve Performance</Text>
        </View>
    );
};

export default ImprovePerformanceCard;