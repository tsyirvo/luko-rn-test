import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from '../../components/shared/primitives';

import { dataset, barWidth } from './constants';

const XAxis = () => (
  <Box
    flexDirection="row"
    alignItems="flex-end"
    justifyContent="flex-start"
    style={StyleSheet.absoluteFill}
  >
    {dataset.labels.map((month, index) => (
      <Text
        width={barWidth}
        color="black"
        key={`${month}${index}`}
        mx={5}
        textAlign="center"
      >
        {month}
      </Text>
    ))}
  </Box>
);

export default XAxis;
