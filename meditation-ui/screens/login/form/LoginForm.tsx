import React, { FunctionComponent } from "react";
import { Formik } from 'formik';
import { Text, View } from "react-native";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

interface Props {
    onSubmit: () => any;
}

const LoginForm: FunctionComponent<Props> = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={_ => props.onSubmit()}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Input style={{ marginVertical: 10 }} onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder={"Email address"} value={values.email} />
                    <Input style={{ marginVertical: 10 }} secureTextEntry onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder={"Password"} value={values.password} />

                    <Button style={{ marginVertical: 10 }} label={"Log In"} onPress={handleSubmit} />

                    <Text style={{
                        textTransform: "uppercase",
                        fontSize: 13,
                        alignSelf: "center",
                        letterSpacing: 0.75,
                        color: "#A1A4B2",
                        fontWeight: "400",
                        paddingVertical: 3
                    }}>Forgot  Password?</Text>
                </View>
            )}
        </Formik>
    );
};

export default LoginForm;