import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useContext } from "react";
import { Context } from "../App";

export default function Home() {
  const context = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <SafeAreaView>
      <Text>ID : {context.Id}</Text>
      <TouchableOpacity onPress={() => context.setIsLoggedIn()}>
        <Button style={styles.btn}>Logout</Button>
      </TouchableOpacity>
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