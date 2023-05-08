import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default function App() {
const showAlert = () => {
  Alert.alert('knappen är tryckt')
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native, lektion 1</Text>
      <Button onPress={showAlert} color="red" style={styles.button} title="Tryck här" />
      <StatusBar style="auto" />
      
      <TextInput
      placeholder="Skriv här..."
      style={styles.input}
      />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    margin: 10,
    height: 50,
    width: 300,
  }

});
