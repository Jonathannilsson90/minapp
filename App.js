import { StatusBar } from "expo-status-bar";
import React from 'react'
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert,  FlatList, Modal, Switch, } from "react-native";

export default function App() {
const [modalVisible,setModalVisible] = useState(false)
const [switchValue, setSwitchValue] = useState(false)
const [inputFieldText,setInputFieldText] = useState("")
const [words,setWords] = useState([])

const addtext = () => {
setWords([...words, inputFieldText.trim()])
setInputFieldText("")
}

  const showAlert = () => {
  Alert.alert('Knappen är tryckt')

}
const onSwitchValueChange =  (value) => {
  setSwitchValue(value)
}

const onCloseModal = () => {
  setModalVisible(false)
}
return (

    <View style={styles.container}>

      <Text style={styles.text}>React Native, lektion 1</Text>
      <Button onPress={showAlert} color="red" style={styles.button} title="Tryck här" />
      <StatusBar style="auto" />

          <FlatList data={words} renderItem={({item}) => <Text>{item}</Text>}/>

      <TextInput
      onChangeText={setInputFieldText}
      value={inputFieldText}
      placeholder="Skriv här..."
      style={styles.input}
      />
      <Button title="Lägg till i listan"
      onPress={addtext}
      />
  

        <Button color="orange" title="Det här är en modal" onPress={ () => setModalVisible(true)} ></Button>
  
      <Modal style={styles.modal} visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Switch
            value={switchValue}
            onValueChange={onSwitchValueChange}
            trackColor={{ false: 'red', true: 'green' }}
          />
         
            <Button color="black" title="Stäng modalen"onPress={onCloseModal}/>
          <Text>Andra sidan av modalen! D:</Text>
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
    padding: 30,
    flex: 1,
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
  modal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  TestText: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  }
});
