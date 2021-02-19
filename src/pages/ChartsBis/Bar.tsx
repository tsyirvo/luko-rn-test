import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '../../components/shared/primitives';

import { graphHeight, barWidth, lerp } from './constants';

type Props = {
  isPending: boolean;
  bar: number;
  maxY: number;
  index: number;
  onPress: (index: number) => void;
};

const Bar = ({ isPending, bar, maxY, onPress, index }: Props) => (
  <Box
    width={barWidth}
    height={graphHeight}
    mx={5}
    borderRadius={5}
    overflow="hidden"
    bg={isPending ? 'blueGrey' : 'paleGreyThree'}
  >
    <Pressable
      onPress={() => onPress(index % 12)}
      style={{ position: 'absolute', bottom: 0 }}
    >
      <Box
        width={barWidth}
        height={lerp(0, graphHeight, bar / maxY)}
        bg={isPending ? 'blueGrey' : 'blue'}
      />
    </Pressable>
  </Box>
);

export default Bar;
