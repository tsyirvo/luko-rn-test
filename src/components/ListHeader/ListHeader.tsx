import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Box, Title } from '../shared/primitives';
import theme from '../../styles/theme';

const ListHeader = () => {
  const navigation = useNavigation();

  const onAddPress = useCallback(() => {
    navigation.navigate('ContractSelection');
  }, [navigation]);

  return (
    <Box
      bg="white"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px="large"
      pt="xxLarge"
      pb="medium"
    >
      <Title variant="xLarge">Inventory</Title>

      <Pressable onPress={onAddPress}>
        <Ionicons name="add-circle" size={28} color={theme.colors.blue} />
      </Pressable>
    </Box>
  );
};

export default ListHeader;
