import React, { useState } from "react";
import firebase from "firebase";
import { Button, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";

interface IUser {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [state, setState] = useState<IUser>({
    email: "",
    password: "",
  });

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
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
        placeholder="Email..."
        defaultValue={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <Input
        placeholder="Password..."
        defaultValue={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
      />
      <Button title="Login" onPress={onSignIn} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
