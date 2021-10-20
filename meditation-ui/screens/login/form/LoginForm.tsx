import React, { FunctionComponent } from "react";
import { Formik } from 'formik';
import { View } from "react-native";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

interface Props { }

const LoginForm: FunctionComponent<Props> = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Input style={{ marginVertical: 10 }} onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder={"Email address"} value={values.email} />
                    <Input style={{ marginVertical: 10 }} secureTextEntry onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder={"Password"} value={values.password} />

                    <Button style={{marginVertical: 10}} label={"Log In"} onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default LoginForm;