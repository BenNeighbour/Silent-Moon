import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "./cards.styles";
import ReduceAnxiety from "./svg/ReduceAnxiety.svg";

interface Props {}

const ReduceAnxietyCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({backgroundColor: "#FFCF86"}, styles.container)}>
            <ReduceAnxiety style={{marginVertical: 17, alignSelf: "center"}} />
            <Text style={Object.assign({color: "#3F414E"}, styles.title)}>Reduce Anxiety</Text>
        </View>
    );
};

export default ReduceAnxietyCard;