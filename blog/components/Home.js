import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useContext } from "react";
import { Context } from "../App";

export default function Home() {
  const context = useContext(Context);

  return (
    <SafeAreaView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    backgroundColor: "lightgrey",
    padding: 10,
  },
});