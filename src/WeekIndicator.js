import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const WeekIndicator = ({ weekHeaderTextColor }) => {
  return (
    <View style={[styles.weekContainer]}>
      {weekDays.map((weekday) => (
        <View style={[styles.dateContainer]} key={weekday}>
          <Text style={[styles.weekHeaderText, { color: weekHeaderTextColor || '#00A3FF' }]}>
            {weekday}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 12,
    paddingBottom: 12,
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
