import React, { FunctionComponent } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Tick } from "./TickSvg";

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
                width: "100%"
            }}>
                <Text style={{
                    fontSize: 18,
                }}>
                    {props.children}
                </Text>
                <View style={{
                    alignSelf: "flex-end",
                    marginLeft: "auto",
                    backgroundColor: "transparent",
                    borderRadius: 4,
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: props.color,
                    paddingVertical: 3,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: "flex"
                    }}>
                        {props.checked ? <SvgXml style={{ width: 10, height: 10 }} xml={Tick} /> : <View style={{width: 10, height: 10}} />}
                    </View>
                </View>
            </View>

        </TouchableHighlight>
    );
};

export default Checkbox;