import { useState, useContext } from "react";
import { Context } from "../App";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, Alert} from "react-native";
  
  export default function Login() {
    const context = useContext(Context);
    const [Id, setId] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const validId = (user) => {
      context.setId(user.toString());
      const userRegex = /^([1-9][0-9]?|10)$/;
      if (userRegex.test(user) && user <= 10) {
        return handleId(true);
      } else {
        return handleId(false);
      }
    };
    
    const handleId = (e) => {
      setId(e);
    };
    
    const handlePress = () => {
      if (Id) {
        return validID();
      } else {
       console.warn("Please the ID must be between 1 and 10");
       Alert.alert("Please the ID must be between 1 and 10")

      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text styles={styles.title}> Connect Yourself :)</Text>
        <TextInput
          style={styles.input}
          placeholder= "ID"
          onChangeText={(user) => validId(user)}
        ></TextInput>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: "bold",
      marginBottom: 15,
    },
    input: {
      padding: 8,
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      marginBottom: 10,
    },
    btn: {
      borderRadius: 15,
      backgroundColor: "lightgrey",
      padding: 10,
    },
  });