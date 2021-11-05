import { Formik } from 'formik';
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

interface Props {
    onSubmit: (fields: any) => any;
}

const LoginForm: FunctionComponent<Props> = (props) => {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={fields => props.onSubmit(fields)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Input style={{ marginVertical: 10 }} onChangeText={handleChange('username')} onBlur={handleBlur('username')} placeholder={"Email address"} value={values.username} />
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