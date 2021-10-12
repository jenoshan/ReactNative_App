import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootTabScreenProps } from '../types';

export default function Chat({navigation} : RootTabScreenProps<'TabOne'>) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatView')}>
            <View style={styles.separator}>
              <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
              <Text style={styles.title}>Kannathilaka</Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>jeyavera</Text>
          </View>
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>Nilani</Text>
          </View>
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>pavithirashinge</Text>
          </View>
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>wihiramasinge</Text>
          </View>
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>G-08</Text>
          </View>
          <View style={styles.separator}>
            <Image source={require('../assets/images/nouser.png')} style={styles.profile} />
            <Text style={styles.title}>Friends Set</Text>
          </View>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50
  },
  separator: {
    paddingVertical: 10,
    borderWidth : 2,
    borderRadius : 50,
    borderColor: "#05445E",
    padding: 20,
    margin : 5,
    width: 350,
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profile: {
    height: 60,
    width: 60,
    alignItems: 'flex-start',
    marginTop: -7,
    marginLeft: -16,
  }
});
