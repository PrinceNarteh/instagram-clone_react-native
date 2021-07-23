import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <View style={styles.input}>
      <TextInput {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
  },
});
