import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import ReduceStress from "./svg/ReduceStress.svg";

interface Props {}

const ReduceStressCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({backgroundColor: "#808AFF"}, styles.container)}>
            <ReduceStress style={{marginBottom: 25}} />
            <Text style={Object.assign({color: "#FFECCC"}, styles.title)}>Reduce Stress</Text>
        </View>
    );
};

export default ReduceStressCard;