import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import firebase from "firebase";
import Input from "../../components/Input";

interface IState {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen = () => {
  const [state, setState] = useState<IState>({
    email: "",
    password: "",
    name: "",
  });

  const onChangeText = (name: string) => {};

  const onSignUp = () => {
    console.log(process.env.REACT_APP_apiKey);
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        defaultValue={state.name}
        onChangeText={(val) => setState({ ...state, name: val })}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        defaultValue={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <Input
        placeholder="Password"
        defaultValue={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
        secureTextEntry
      />
      <Button title="Register" onPress={onSignUp} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
