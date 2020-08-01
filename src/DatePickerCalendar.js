import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Header} from './Header';
import {getCalendarDates} from './functions/getCalendarDates';
import {WeekIndicator} from './WeekIndicator';

const DatePickerCalendar = ({value, onChange, header, headerStyle}) => {
  const [month, setMonth] = useState(moment().clone().month());

  const calendar = getCalendarDates(month);
  console.log(month);

  return (
      <View style={[styles.modal]}>
        <Header
            value={value}
            header={header}
            headerStyle={headerStyle}
            month={month}
            setMonth={setMonth}
        />
        <WeekIndicator />
        <View style={{width: '100%'}}>
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
    borderRadius: 100,
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
