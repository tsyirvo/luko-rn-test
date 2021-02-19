import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from '../../components/shared/primitives';

import { graphHeight, lerp } from './constants';

type Props = {
  minY: number;
  maxY: number;
};

const YAxis = ({ minY, maxY }: Props) => (
  <Box
    style={StyleSheet.absoluteFill}
    height={graphHeight}
    alignItems="flex-end"
  >
    {[1, 0.66, 0.33, 0].map((t) => (
      <Box flex={1} justifyContent="space-between" key={t}>
        <Text>{Math.floor(lerp(minY, maxY, t))}</Text>
      </Box>
    ))}
  </Box>
);

export default YAxis;
