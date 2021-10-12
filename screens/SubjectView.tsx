import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function SubjectView() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          January
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          February
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          March
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          April
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          May
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          June
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          July
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          August
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          September
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          October
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.helpLink}>
          <Text style={styles.title} lightColor={Colors.light.tint}>
          December
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 5,
    color: '#B68D40',
  },
  separator: {
    paddingVertical: 10,
    borderWidth : 2,
    borderRadius : 10,
    borderColor: "#05445E",
    padding: 20,
    margin : 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
