import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface IState {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [state, setState] = useState<IState>({
    email: "",
    password: "",
    name: "",
  });

  const onChangeText = (name: string) => {};

  const onSignUp = () => {};

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

export default Register;

const styles = StyleSheet.create({});
