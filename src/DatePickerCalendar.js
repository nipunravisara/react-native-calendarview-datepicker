import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Header } from './Header';
import { getCalendarDates } from './functions/getCalendarDates';
import { WeekIndicator } from './WeekIndicator';

const DatePickerCalendar = ({
  date,
  onChange,
  customHeader,
  headerStyle,
  weekHeaderTextColor,
  selectedDateHighlightColor,
  selectedDateHighlightRadius,
  datesColor,
  selectedDateColor,
}) => {
  const [month, setMonth] = useState(moment().clone().month());
  const [year, setYear] = useState(moment().clone().year());

  const calendar = getCalendarDates(year, month);

  return (
    <View style={[styles.modal]}>
      <Header
        date={date}
        customHeader={customHeader}
        headerStyle={headerStyle}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
      <WeekIndicator weekHeaderTextColor={weekHeaderTextColor} />
      <View style={{ width: '100%' }}>
        {calendar.map((week, index) => (
          <View style={[styles.weekContainer]} key={`${week + index}`}>
            {week.map((day) => (
              <TouchableOpacity
                style={[
                  styles.dateContainer,
                  moment(date).isSame(moment(day.date), 'day')
                    ? {
                      backgroundColor: selectedDateHighlightColor || '#00A3FF',
                      borderRadius:
                        selectedDateHighlightRadius === 0
                          ? 0
                          : selectedDateHighlightRadius || 100,
                    }
                    : { backgroundColor: 'transparent' },
                ]}
                key={day.date}
                onPress={() => onChange(moment(day.date).endOf('day'))}>
                <Text
                  style={[
                    styles.dateText,
                    moment(date).isSame(moment(day.date), 'day')
                      ? { color: selectedDateColor || 'white' }
                      : { color: datesColor || 'black' },
                  ]}>
                  {`0${moment(day.date).date()}`.slice(-2)}
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
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Calendar
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7,
    fontSize: 13,
    marginBottom: 1,
  },
});
