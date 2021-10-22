import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { ReduceStressSvg } from "./svg/ReduceStress";

interface Props {}

const ReduceStressCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#808AFF"}, styles.container)}>
            <SvgXml style={{marginBottom: 25}} xml={ReduceStressSvg} />
            <Text style={Object.assign({color: "#FFECCC"}, styles.title)}>Reduce Stress</Text>
        </View>
    );
};

export default ReduceStressCard;