import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const WeekIndicator = () => {
  return (
    <View style={[styles.weekContainer]}>
      {weekDays.map((weekday) => (
        <View style={[styles.dateContainer]} key={weekday}>
          <Text style={[styles.weekHeaderText]}>{weekday}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  weekHeaderText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00a3ff',
  },
});
