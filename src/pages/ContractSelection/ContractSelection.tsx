import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import ContractSelector from '../../components/ContractSelector';
import NewItemHeader from '../../components/NewItemHeader';
import { Box } from '../../components/shared/primitives';
import SafeView from '../../components/shared/SafeView';

const contracts = [
  {
    id: 'paris',
    label: "Paris's appartment",
  },
  {
    id: 'london',
    label: "London's appartment",
  },
];

const ItemsList = () => {
  const navigation = useNavigation();

  const onPress = useCallback(
    (contract) => {
      navigation.navigate('NewItem', { contract });
    },
    [navigation],
  );

  return (
    <Box flex={1} bg="white">
      <SafeView>
        <NewItemHeader isFormValid={false} />

        <Box p="large" alignItems="center">
          {contracts.map((contract) => (
            <ContractSelector
              key={contract.id}
              onPress={onPress}
              {...contract}
            />
          ))}
        </Box>
      </SafeView>
    </Box>
  );
};

export default ItemsList;
