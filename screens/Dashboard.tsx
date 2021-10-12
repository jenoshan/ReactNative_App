import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Dashboard({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <View style={styles.colorbox1}></View>
        <Text style={styles.title}>Maths - G/08</Text>
      </View>
      <View style={styles.separator}>
        <View style={styles.colorbox2}></View>
        <Text style={styles.title}>Science - G/08</Text>
      </View>
      <View style={styles.separator}>
        <View style={styles.colorbox3}></View>
        <Text style={styles.title}>Tamil - G/08</Text>
      </View>
      <View style={styles.separator}>
        <View style={styles.colorbox4}></View>
        <Text style={styles.title}>English - G/08</Text>
      </View>
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
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  colorbox1: {
    backgroundColor: '#189AB4',
    borderRadius : 10,
    height: 75,
    width: 300,
    marginTop: -10
  },
  colorbox2: {
    backgroundColor: '#81B622',
    borderRadius : 10,
    height: 75,
    width: 300,
    marginTop: -10
  },
  colorbox3: {
    backgroundColor: '#B68D40',
    borderRadius : 10,
    height: 75,
    width: 300,
    marginTop: -10
  },
  colorbox4: {
    backgroundColor: '#EF7C8E',
    borderRadius : 10,
    height: 75,
    width: 300,
    marginTop: -10
  },
});
