import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MARGIN } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: MARGIN,
  },
  title: {
    color: 'black',
    paddingVertical: 5,
  },
  text: {
    color: 'grey',
  },
});

const GraphOverview = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Average</Text>
    <Text style={styles.title}>380 W</Text>
    <Text style={styles.text}>19 JAV 2020</Text>
  </View>
);

export default GraphOverview;
