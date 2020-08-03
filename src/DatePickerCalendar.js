import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Header } from './Header';
import { getCalendarDates } from './functions/getCalendarDates';
import { WeekIndicator } from './WeekIndicator';

const DatePickerCalendar = ({
                                date,
                                onChange,
                                placeholder,
                                placeholderStyles,
                                fieldButtonStylesDateFormat,
                                fieldButtonStyles,
                                fieldButtonTextStyles,
                                modalBackgroundColor,
                                customHeader,
                                headerStyles,
                                weekHeaderTextColor,
                                selectedDateHighlightColor,
                                selectedDateHighlightRadius,
                                datesColor,
                                selectedDateColor,
                            }) => {
    const [month, setMonth] = useState(moment().clone().month());
    const [year, setYear] = useState(moment().clone().year());
    const [isOpen, setIsOpen] = useState(false);

    const calendar = getCalendarDates(year, month);

    return (
        <>
            <TouchableOpacity style={[styles.dateFieldContainer, fieldButtonStyles]} onPress={() => setIsOpen(!isOpen)}>
                {date === undefined ? (
                    <Text style={[styles.placeholder, placeholderStyles]}>{placeholder}</Text>
                ) : (
                    <Text style={[styles.dateFieldText, fieldButtonTextStyles]}>{moment(date).format(fieldButtonStylesDateFormat || "MMMM Do YYYY")}</Text>
                )}
            </TouchableOpacity>
            {isOpen && (
                <Modal animationType={"fade"} transparent={true} presentationStyle={'overFullScreen'} visible = {isOpen} onRequestClose = {() => setIsOpen(!isOpen) }>
                    <TouchableOpacity style={styles.modalBackground} onPress={() => setIsOpen(!isOpen)}>
                        <View style={[styles.modal, modalBackgroundColor && {backgroundColor: modalBackgroundColor}]}>
                            <Header
                                date={date}
                                customHeader={customHeader}
                                headerStyles={headerStyles}
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
                                                onPress={() => {
                                                    onChange(moment(day.date).endOf('day'));
                                                    setIsOpen(!isOpen)
                                                }}>
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
                    </TouchableOpacity>
                </Modal>
            )}
        </>

    );
};

export default DatePickerCalendar;

const styles = StyleSheet.create({
    // Outer modal
    modal: {
        width: '95%',
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

    //Field button
    dateFieldContainer: {
        margin: 10,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
        borderColor: '#000'
    },

    dateFieldText: {
        fontSize: 13,
        color: 'black',
    },

    placeholder: {
        fontSize: 13,
        color: 'black',
        opacity: .3,
    },

    modalBackground: {
        backgroundColor: '#2222225c',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
