import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../utils/types";

type LandingScreenProp = StackScreenProps<RootStackParamList, "LandingScreen">;

const LandingScreen: React.FC<LandingScreenProp> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
