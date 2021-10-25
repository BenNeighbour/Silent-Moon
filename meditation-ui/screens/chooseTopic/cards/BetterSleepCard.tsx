import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import BetterSleep from "./svg/BetterSleep.svg";

interface Props { }

const IncreaseHappinessCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({ backgroundColor: "#3F414E" }, styles.container)}>
            <BetterSleep style={{ paddingVertical: 10, alignSelf: "center" }} />
            <Text style={Object.assign({ color: "#EBEAEC" }, styles.title)}>Better Sleep</Text>
        </View>
    );
};

export default IncreaseHappinessCard;