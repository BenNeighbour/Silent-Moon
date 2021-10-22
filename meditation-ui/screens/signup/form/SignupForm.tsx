import { Formik } from 'formik';
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button";
import { Checkbox } from "../../../components/checkbox";
import { Input } from "../../../components/input";
import { styles } from "./SignupForm.styles";

interface Props { 
    onSubmit: () => any;
}

const SignupForm: FunctionComponent<Props> = (props) => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', hasReadPrivacyPolicy: true }}
            onSubmit={_ => props.onSubmit()}
        >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                <View>
                    <Input withAsyncValidation touched={touched.name} error={errors.name} style={{ marginVertical: 10 }} onChangeText={handleChange('name')} onBlur={handleBlur('name')} placeholder={"Your name"} value={values.name} />
                    <Input withAsyncValidation touched={touched.email} error={errors.email} style={{ marginVertical: 10 }} onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder={"Email address"} value={values.email} />
                    <Input withAsyncValidation touched={touched.password} error={errors.password} style={{ marginVertical: 10 }} secureTextEntry onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder={"Password"} value={values.password} />

                    <Checkbox color={!values.hasReadPrivacyPolicy ? '#A1A4B2' : '#8E97FD'} checked={values.hasReadPrivacyPolicy} label={"Privacy Policy"} handleChange={() => setFieldValue('hasReadPrivacyPolicy', !values.hasReadPrivacyPolicy)}>
                        <Text style={styles.privacyPolicyText}>I have read the <Text style={styles.privacyPolicyTextLink} onPress={() => {
                            {/* TODO: Open Web Browser */ }
                        }}>Privacy Policy</Text></Text>
                    </Checkbox>


                    <Button style={{ marginVertical: 10 }} label={"Get Started"} onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default SignupForm;