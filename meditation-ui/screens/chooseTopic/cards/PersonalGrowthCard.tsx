import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { PersonalGrowthSvg } from "./svg/PersonalGrowth";

interface Props {}

const PersonalGrowthCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#6CB28E"}, styles.container)}>
            <SvgXml style={{marginVertical: 10}} xml={PersonalGrowthSvg} />
            <Text style={Object.assign({color: "#FFECCC"}, styles.title)}>Personal Growth</Text>
        </View>
    );
};

export default PersonalGrowthCard;