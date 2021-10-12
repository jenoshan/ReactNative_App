import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHelpPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Go to Website
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Grades
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlBlogsPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Blogs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
            Log out
          </Text>
        </TouchableOpacity>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://cal.kln.ac.lk/login/index.php'
  );
}

function handlBlogsPress() {
  WebBrowser.openBrowserAsync(
    'https://medium.com/tag/javascript'
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpLink: {
    paddingVertical: 10,
    borderWidth : 1,
    borderRadius : 10,
    borderColor: "#189AB4",
    padding: 20,
    margin : 10,
    width: 300,
  },
});
