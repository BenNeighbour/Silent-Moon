import React, { FunctionComponent } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from './screens/onboarding';
import { Login } from './screens/login';
import { Signup } from './screens/signup';
import { Welcome } from './screens/welcome';

const Stack = createNativeStackNavigator();

const App: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
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