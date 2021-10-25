import React, { FunctionComponent, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData, View } from "react-native";
import { styles } from "./Input.styles";
import Okay from "./symbols/FieldOkaySymbol.svg";
import PasswordSymbol from "./symbols/PasswordFieldSymbol.svg";

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
        <View style={{ ...props.style, ...styles.input }}>
            <TextInput
                secureTextEntry
                {...props}
                style={{ flex: 1, paddingVertical: 20, fontSize: 16 }}
                editable
                focusable
            />

            {props.withAsyncValidation ? props.secureTextEntry ? <PasswordSymbol  onPress={() => {
                if (props.secureTextEntry) setIsSecureEntry(!secureTextEntry);
            }} style={{
                alignSelf: "center",
                height: "100%",
                paddingVertical: 10,
            }} /> : !props.error && props.value !== "" ? <Okay style={{
                alignSelf: "center",
                height: "100%",
                paddingVertical: 10,
            }} /> : null
                : null}
        </View>
    );
};

export default Input;