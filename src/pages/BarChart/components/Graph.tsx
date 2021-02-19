import React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { isAndroid } from '../utils/constants';

import Bar from './Bar';
import HorizontalLines from './HorizontalLines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: isAndroid ? 10 : 8,
    // backgroundColor: 'green',
  },
});

type Props = {
  getGraphWidth: (event: LayoutChangeEvent) => void;
  barCount: number;
  barWidth: number;
};

const Graph = ({ barCount, barWidth, getGraphWidth }: Props) => {
  const test = Array.from(Array(barCount).keys());

  return (
    <View style={styles.container} onLayout={getGraphWidth}>
      <HorizontalLines />

      {test.map((i) => (
        <Bar key={i} barWidth={barWidth} />
      ))}
    </View>
  );
};

export default Graph;
