import "react-native-gesture-handler";
import firebase from "firebase";
import { View, Text } from "react-native";
import { Provider } from "react-redux";

import React, { useState, useEffect } from "react";

import "./src/utils/firebase";
import { store } from "./src/redux/store";
import MainScreen from "./src/screens/MainScreen";
import Navigation from "./src/components/Navigation";

interface IState {
  loaded: boolean;
  loggedIn: boolean;
}

export default function App() {
  const [state, setState] = useState<IState>({
    loaded: false,
    loggedIn: false,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        setState({ ...state, loaded: true });
      } else {
        setState({ loaded: true, loggedIn: true });
      }
    });
  });

  console.log(state);

  if (!state.loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading state...</Text>
      </View>
    );
  }

  if (!state.loggedIn) {
    return <Navigation />;
  }

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
