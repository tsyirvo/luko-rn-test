import React from 'react';
import { StyleSheet, View } from 'react-native';

import { isAndroid } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    justifyContent: 'space-between',
  },
  lineWrapper: {
    height: 20,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    borderRadius: 1,
  },
});

const HorizontalLines = () => (
  <View style={styles.container}>
    {[...Array(6)].map((_, index) => (
      <View key={index} style={styles.lineWrapper}>
        <View
          style={[
            styles.line,
            {
              backgroundColor:
                index === 5 || (index === 0 && !isAndroid)
                  ? 'transparent'
                  : '#EAE9E3',
            },
          ]}
        />
      </View>
    ))}
  </View>
);

export default HorizontalLines;
