import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import IncreaseHappiness from "./svg/IncreaseHappiness.svg";

interface Props {}

const IncreaseHappinessCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({backgroundColor: "#FEB18F"}, styles.container)}>
            <IncreaseHappiness style={{marginBottom: 10, alignSelf: "center"}} />
            <Text style={Object.assign({ color: "#3F414E" }, styles.title)}>Increase Happiness</Text>
        </View>
    );
};

export default IncreaseHappinessCard;