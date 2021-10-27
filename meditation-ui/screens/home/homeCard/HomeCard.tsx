import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button";
import { styles } from "./HomeCard.styles";

interface Props {
    title: string;
    type: string;
    svg: React.ComponentType<any>;
    contentColor: "light" | "dark";
    backgroundColor: string;
    duration: string;
}

const HomeCard: FunctionComponent<Props> = (props) => {
    return (
        <View style={Object.assign({ backgroundColor: props.backgroundColor }, styles.container)}>
            <View style={{ alignSelf: "flex-end" }}>
                <props.svg />
            </View>

            <View style={{padding: 15, paddingTop: 0}}>
                <View style={{ paddingBottom: 20 }}>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#F7E8D0" : "#524F53" }, styles.title)}>{props.title}</Text>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#F7E8D0" : "#524F53" }, styles.type)}>{props.type}</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={Object.assign({ color: props.contentColor === "light" ? "#EBEAEC" : "#524F53" }, styles.duration)}>{props.duration}</Text>
                    <Button style={{ flex: 1 }} textColor={props.contentColor === "light" ? "#524F53" : "#EBEAEC"} color={props.contentColor === "light" ? "#EBEAEC" : "#524F53"} label={"Start"} padding={6} onPress={() => { }} />
                </View>
            </View>
        </View>
    );
};

export default HomeCard;