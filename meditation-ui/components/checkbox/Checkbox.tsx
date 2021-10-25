import React, { FunctionComponent } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Tick from "./Tick.svg";

interface Props {
    checked: boolean;
    label: string;
    handleChange: (e: any) => any;
    color: string;
}

const Checkbox: FunctionComponent<Props> = (props) => {
    return (
        <TouchableHighlight
            onPress={props.handleChange}
            underlayColor="transparent"
            style={{ width: "100%", display: "flex", paddingHorizontal: 10, paddingVertical: 7 }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: "flex",
                width: "100%",
            }}>
                <Text style={{
                    fontSize: 18,
                }}>
                    {props.children}
                </Text>
                <View style={{
                    display: "flex",
                    alignSelf: "flex-end",
                    marginLeft: "auto",
                    backgroundColor: "transparent",
                    borderRadius: 4,
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: props.color,
                    // padding: 3,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden"
                    }}>
                        {props.checked ? <Tick style={{width: 10, height: 10}} /> : <View style={{width: 10, height: 10}} />}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default Checkbox;