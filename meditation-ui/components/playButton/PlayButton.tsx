import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./PlayButton.styles";
import Play from "./PlaySymbol.svg";

interface Props { 
    onPress: (e: any) => any;
}

const PlayButton: FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Play />
        </TouchableOpacity>
    );
};

export default PlayButton;