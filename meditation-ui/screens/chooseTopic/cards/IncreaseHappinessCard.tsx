import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { IncreaseHappinessSvg } from "./svg/IncreaseHappiness";

interface Props {}

const IncreaseHappinessCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#FEB18F"}, styles.container)}>
            <SvgXml style={{marginBottom: 10, alignSelf: "center"}} xml={IncreaseHappinessSvg} />
            <Text style={Object.assign({ color: "#3F414E" }, styles.title)}>Increase Happiness</Text>
        </View>
    );
};

export default IncreaseHappinessCard;