import {View, StyleSheet } from "react-native";
import { useState, createContext } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";

import Login from "./views/Login";
import Home from "./views/Home";

export const Context = createContext("");

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Id, setId] = useState("");

  const Val = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
    Id: Id,
    setId: setId,
  };

  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const LoggedIn = () => {
    return isLoggedIn ? (
      <Home context={Val}/>
    ) : (
      <Login context={Val}/>
    );
  };
  return (
    <Context.Provider value={Val}>
      <View style={styles.container}>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={LoggedIn()} />
          </Routes>
        </NativeRouter>
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});