import React, { FunctionComponent, useState } from "react";
import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputFocusEventData, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { styles } from "./Input.styles";
import { Okay } from "./symbols/FieldOkaySymbol";
import { PasswordSymbol } from "./symbols/PasswordFieldSymbol";

interface Props {
    value: string;
    onChangeText: (e: any) => any;
    placeholder: string;
    style?: StyleSheet.NamedStyles<any> | {};
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    secureTextEntry?: boolean;
    error?: string;
    touched?: boolean | false;
    withAsyncValidation?: boolean | false;
}

const Input: FunctionComponent<Props> = (props) => {
    const [secureTextEntry, setIsSecureEntry] = useState<boolean>(props.secureTextEntry || false);

    return (
        <View style={{...props.style, ...styles.input}}>
            <TextInput
                {...props}
                style={{ flex: 1, paddingVertical: 20, fontSize: 16 }}
                secureTextEntry
                editable
                focusable
            />
            {props.withAsyncValidation ? <SvgXml onPress={() => {
                if (props.secureTextEntry) setIsSecureEntry(!secureTextEntry);
            }} style={{  
                alignSelf: "center",
                height: "100%",
                paddingVertical: 10,
            }} xml={props.secureTextEntry ? PasswordSymbol : !props.error && props.value !== "" ? Okay: null} /> : null}
        </View>
    );
};

export default Input;