import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { ImprovePerformanceSvg } from "./svg/ImprovePerformance";

interface Props {}

const ImprovePerformanceCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#FA6E5A"}, styles.container)}>
            <SvgXml style={{marginVertical: 10, alignSelf: "center"}} xml={ImprovePerformanceSvg} />
            <Text style={Object.assign({color: "#FEF9F3"}, styles.title)}>Improve Performance</Text>
        </View>
    );
};

export default ImprovePerformanceCard;