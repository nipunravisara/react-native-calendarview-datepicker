import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Header} from './Header';
import {getCalendarDates} from './functions/getCalendarDates';
import {WeekIndicator} from './WeekIndicator';

const calendar = getCalendarDates();

const DatePickerCalendar = ({value, onChange, header, headerStyle}) => {
  return (
    <View style={[styles.modal]}>
      <Header value={value} header={header} headerStyle={headerStyle} />
      <WeekIndicator />
      <View>
        {calendar.map((week, index) => (
          <View style={[styles.weekContainer]} key={`${week + index}`}>
            {week.map((day) => (
              <TouchableOpacity
                style={[
                  styles.dateContainer,
                  moment(value).isSame(moment(day.date), 'day')
                    ? {backgroundColor: '#00A3FF'}
                    : {backgroundColor: 'transparent'},
                ]}
                key={day.date}
                onPress={() => onChange(moment(day.date).endOf('day'))}>
                <Text
                  style={[
                    styles.dateText,
                    moment(value).isSame(moment(day.date), 'day')
                      ? {color: '#FFFF'}
                      : {color: '#000'},
                  ]}>
                  {moment(day.date).date()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default DatePickerCalendar;

const styles = StyleSheet.create({
  // Outer modal
  modal: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  // Week indicator
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateContainer: {
    width: 30,
    height: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  dateText: {
    fontSize: 13,
    marginBottom: 1,
  },
});
