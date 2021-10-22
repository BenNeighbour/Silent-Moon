import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./cards.styles";
import { ReduceAnxietySvg } from "./svg/ReduceAnxiety";

interface Props {}

const ReduceAnxietyCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#FFCF86"}, styles.container)}>
            <SvgXml style={{marginVertical: 17, alignSelf: "center"}} xml={ReduceAnxietySvg} />
            <Text style={Object.assign({color: "#3F414E"}, styles.title)}>Reduce Anxiety</Text>
        </View>
    );
};

export default ReduceAnxietyCard;