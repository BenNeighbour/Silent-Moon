import Auth from '@aws-amplify/auth';
import { NavigationProp } from '@react-navigation/core';

export const SignUp = (fields: any, navigation: NavigationProp<any>) => {
    Auth.signUp({
        username: fields.name,
        password: fields.password,
        attributes: {
            email: fields.email,
            profile: "",
            picture: "",
            gender: "",
            name: fields.name
        },
        validationData: []
    }).then(() => {
        Auth.signIn({
            username: fields.username,
            password: fields.password
        }).then((data: any) => {
            console.log(data);
            navigation.navigate("Welcome");
        })
    }).catch((err: any) => {
        console.error(err);
    });
}

export const SignIn = (fields: any, navigation: NavigationProp<any>) => {
    Auth.signIn({
        username: fields.username,
        password: fields.password
    })
        .then((data: any) => {
            console.log(data);
            navigation.navigate("Welcome");
        })
        .catch((err: any) => {
            console.log(err);
        });
}