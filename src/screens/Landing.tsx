import React from "react";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";

type LandingProps = {
  navigation: string;
};

const Landing: React.FC<LandingProps> = ({ navigation }) => {
  const onPress = (
    path: string,
    e: NativeSyntheticEvent<NativeTouchEvent>
  ) => {};

  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <Button title="Register" onPress={(e) => onPress("Register", e)} />
      <Button title="Login" onPress={(e) => onPress("Login", e)} />
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
