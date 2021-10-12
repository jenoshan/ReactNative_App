import * as React from 'react';
import { StyleSheet } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Text, View } from '../components/Themed';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} markedDates={{
        '2021-10-08': {marked: true},
        '2021-10-16': {marked: true},
        '2021-10-18': {marked: true},
        '2021-10-28': {marked: true}
      }} />
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
  },
  calendar: {
    margin : 50,
    width: 350,
    padding: 20,
    height: 450,
    fontWeight: 'bold',
  },
});
