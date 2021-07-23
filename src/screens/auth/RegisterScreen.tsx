import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import firebase from "firebase";

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
    <View>
      <TextInput
        placeholder="Name"
        defaultValue={state.name}
        onChangeText={(val) => setState({ ...state, name: val })}
      />
      <TextInput
        placeholder="Email"
        defaultValue={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <TextInput
        placeholder="Password"
        defaultValue={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
        secureTextEntry
      />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
