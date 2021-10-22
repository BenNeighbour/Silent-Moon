import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { BetterSleepSvg } from "./svg/BetterSleep";

interface Props { }

const IncreaseHappinessCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({ backgroundColor: "#3F414E" }, styles.container)}>
            <SvgXml style={{ paddingVertical: 10, alignSelf: "center" }} xml={BetterSleepSvg} />
            <Text style={Object.assign({ color: "#EBEAEC" }, styles.title)}>Better Sleep</Text>
        </View>
    );
};

export default IncreaseHappinessCard;