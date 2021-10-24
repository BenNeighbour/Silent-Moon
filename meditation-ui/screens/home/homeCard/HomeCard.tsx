import React, { ComponentType, FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button";
import { styles } from "./HomeCard.styles";

interface Props {
    title: string;
    type: string;
    svg: ComponentType;
    contentColor: "light" | "dark";
    backgroundColor: string;
    duration: string;
}

const HomeCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({ backgroundColor: props.backgroundColor }, styles.container)}>
            <View style={{ width: "100%", alignItems: "flex-end" }}><props.svg /></View>

            <View style={styles.mainSection}>
                {/* LEFT SIDE */}
                <View style={styles.leftSide}>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#F7E8D0" : "#524F53" }, styles.title)}>{props.title}</Text>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#F7E8D0" : "#524F53" }, styles.type)}>{props.type}</Text>
                </View>

                {/* RIGHT SIDE */}
                <View style={styles.rightSide}>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#EBEAEC" : "#524F53" }, styles.duration)}>{props.duration}</Text>
                    <Button style={{ flex: 1 }} textColor={"#3F414E"} color={"#EBEAEC"} label={"Start"} padding={6} onPress={() => { }} />
                </View>
            </View>

        </View>
    );
};

export default HomeCard;