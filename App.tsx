import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./src/utils/firebase";

import Navigation from "./src/components/Navigation";
import { View, Text } from "react-native";

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setLoaded(true);
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
          setLoaded(false);
        }
      });
    };
    fetchUser();
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return <Navigation />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}
