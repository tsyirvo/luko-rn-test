import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { Box, Text } from '../shared/primitives';

type Props = {
  id: string;
  label: string;
  onPress: (id: string) => void;
};

const ContractSelector = ({ id, label, onPress }: Props) => {
  const onBtnPress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  return (
    <Box
      borderColor="blueGrey"
      borderWidth={1}
      borderRadius="medium"
      px="medium"
      py="small"
      mb="large"
    >
      <Pressable onPress={onBtnPress}>
        <Text>{label}</Text>
      </Pressable>
    </Box>
  );
};

export default ContractSelector;
