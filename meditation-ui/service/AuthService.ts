import Auth, { CognitoUser } from '@aws-amplify/auth';
import { NavigationProp } from '@react-navigation/core';

// Signs the user up with given credentials (non-federated)
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
        }).then(() => {
            navigation.navigate("Welcome");
        });
    }).catch((err: any) => {
        console.error(err);
    });
}

// Signs the user in with given credentials (non-federated)
export const SignIn = (fields: any, navigation: NavigationProp<any>) => {
    Auth.signIn({
        username: fields.username,
        password: fields.password
    })
        .then(() => {
            // navigation.navigate("Welcome");
        })
        .catch((err: any) => {
            console.log(err);
        });
}