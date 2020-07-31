import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

export const Header = ({value, header, headerStyle}) => {
  return header ? (
    <View style={[styles.header]}>{header}</View>
  ) : (
    <View
      style={[
        styles.header,
        {justifyContent: 'space-between', flexDirection: 'row'},
        headerStyle && headerStyle,
      ]}>
      <TouchableOpacity style={styles.monthNavigator} onPress={() => console.log('next')}>
        <Text style={styles.monthIndicator}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.monthIndicator}>{moment(value).format('MMMM')}</Text>
      <TouchableOpacity style={styles.monthNavigator} onPress={() => console.log('next')}>
        <Text style={styles.monthIndicator}>›</Text>
      </TouchableOpacity>
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
