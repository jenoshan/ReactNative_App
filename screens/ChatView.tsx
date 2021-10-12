import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export default function ChatView() {

  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.message}>{text}</Text>
      </View>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Type a message"></TextInput>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  separator: {
    paddingVertical: 10,
    borderWidth : 2,
    borderRadius : 10,
    borderColor: "#05445E",
    padding: 20,
    margin : 10,
    width: 350,
    height: 450,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    color: '#B68D40',
    borderColor: "#05445E",
    borderRadius : 25,
    fontSize: 18,
  },
  message : {
    fontSize: 18,
    justifyContent: 'flex-start',
  }
});
