import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

export const Header = ({ date, customHeader, headerStyles, year, setYear, month, setMonth }) => {
    return (
        <View
            style={[
                styles.header,
                { justifyContent: 'space-between', flexDirection: 'row' },
                headerStyles && headerStyles,
            ]}>
            {customHeader ? (
                <View style={[styles.header]}>{customHeader(date, month, year, setMonth, setYear)}</View>
            ) : (
                    <>
                        <TouchableOpacity style={styles.monthNavigator} onPress={() => setMonth(month - 1)}>
                            <Text style={styles.monthIndicator}>‹</Text>
                        </TouchableOpacity>
                        <Text style={styles.monthIndicator}>{moment().month(month).format('MMMM')}</Text>
                        <TouchableOpacity style={styles.monthNavigator} onPress={() => setMonth(month + 1)}>
                            <Text style={styles.monthIndicator}>›</Text>
                        </TouchableOpacity>
                    </>
                )}
        </View>
    );
};

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

    // Header
    header: {
        width: '100%',
        padding: 10,
    },

    monthNavigator: {
        width: '8%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    monthIndicator: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
