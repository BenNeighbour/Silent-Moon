import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import PersonalGrowth from "./svg/PersonalGrowth.svg";

interface Props {}

const PersonalGrowthCard: FunctionComponent<Props> = () => {
    return (
        <View style={Object.assign({backgroundColor: "#6CB28E"}, styles.container)}>
            <PersonalGrowth style={{marginVertical: 10}} />
            <Text style={Object.assign({color: "#FFECCC"}, styles.title)}>Personal Growth</Text>
        </View>
    );
};

export default PersonalGrowthCard;