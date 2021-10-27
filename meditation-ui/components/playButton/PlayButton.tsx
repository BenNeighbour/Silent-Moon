import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./PlayButton.styles";
import Play from "./PlaySymbol.svg";

interface Props { 
    onPress: (e: any) => any;
    contentColor?: "light" | "dark";
}

const PlayButton: FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Play fill={props.contentColor === "light" ? "white" : "#3F414E"} fillSecondary={props.contentColor !== "light" ? "white" : "#3F414E"} />
        </TouchableOpacity>
    );
};

export default PlayButton;