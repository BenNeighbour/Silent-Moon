import { NavigationContainer } from '@react-navigation/native';
import React, { FunctionComponent, useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { MainNavigator } from './navigation/mainNavigation';
import { ChooseTopic } from './screens/chooseTopic';
import { Login } from './screens/login';
import { Onboarding } from './screens/onboarding';
import { Signup } from './screens/signup';
import { Welcome } from './screens/welcome';
import config from './aws-exports';
import Amplify from '@aws-amplify/core';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@aws-amplify/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

Amplify.configure(config);

enableScreens();

const Stack = createStackNavigator();

const App: FunctionComponent = () => {
  const [authentication, setAuthentication] = useState<boolean>(true);

  useEffect(() => {
    // Get the current authenticated user, returns null if there is an error/unauthenticated
    Auth.currentAuthenticatedUser().then(() => {
      setAuthentication(true);
    }).catch(() => setAuthentication(false))
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={!authentication ? "Onboarding" : "Home"}>
          {
            authentication ?
              <Stack.Screen name="MainNavigator" options={{ headerShown: false }} component={MainNavigator} />

              :

              <>
                <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
                <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
                <Stack.Screen name="ChooseTopic" options={{ headerShown: false }} component={ChooseTopic} />
              </>
          }
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "white"
  },
});