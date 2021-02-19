import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MARGIN } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: MARGIN,
  },
  title: {
    color: '#2C2302',
    fontSize: 26,
    lineHeight: 32,
    paddingVertical: 5,
  },
  text: {
    color: '#96948A',
    fontSize: 13,
    lineHeight: 17,
  },
  textBis: {
    color: '#96948A',
    fontSize: 15,
    lineHeight: 20,
  },
});

const GraphOverview = () => (
  <View style={styles.container}>
    <Text style={styles.text}>AVERAGE</Text>
    <Text style={styles.title}>380 W</Text>
    <Text style={styles.textBis}>19 JAV 2020</Text>
  </View>
);

export default GraphOverview;
