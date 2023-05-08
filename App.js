import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView, FlatList, Modal,  } from "react-native";

export default function App() {
const [modalVisible,setModalVisible] = useState(false)
const [inputFieldText,setInputFieldText] = useState("")
const [words,setWords] = useState([])

const addtext = () => {
setWords([...words, inputFieldText.trim()])
setInputFieldText("")
}

  const showAlert = () => {
  Alert.alert('Knappen är tryckt')
}
  return (

    <View style={styles.container}>
     <Modal
     
></Modal>
      <Text style={styles.text}>React Native, lektion 1</Text>
      <Button onPress={showAlert} color="red" style={styles.button} title="Tryck här" />
      <StatusBar style="auto" />

        <ScrollView>
          <FlatList data={words} renderItem={({item}) => <Text>{item}</Text>}>

          </FlatList>
{/*    {words.map((text, index) => ( <Text key={index}>{text}</Text>))} */}
      </ScrollView>

      <TextInput
      onChangeText={setInputFieldText}
      value={inputFieldText}
      placeholder="Skriv här..."
      style={styles.input}
      />
      <Button title="Lägg till i listan"
      onPress={addtext}
      />
    
    <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.modalButton}>Öppna modal</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Detta är en modal</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButton}>Stäng modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    borderColor: "#ccc",
    margin: 10,
    height: 50,
    marginVertical: 10,
    width: "100%",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

});
