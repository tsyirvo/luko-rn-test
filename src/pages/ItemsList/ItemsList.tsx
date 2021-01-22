import React from 'react';
import { Edge } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import Item from '../../components/Item';
import { Box } from '../../components/shared/primitives';
import SafeView from '../../components/shared/SafeView';
import ListHeader from '../../components/ListHeader';
import { useItemsContext } from '../../contexts/itemsContext';

const edges = ['bottom'] as Edge[];

const ItemsList = () => {
  const { items } = useItemsContext();

  return (
    <Box flex={1} bg="paleGreyTwo">
      <SafeView edges={edges}>
        <ListHeader />

        <ScrollView>
          <Box
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            pb="large"
          >
            {items.map((item) => (
              <Item
                key={`${item.name}${item.mainPicture}`}
                title={item.name}
                price={item.purchaseValue}
                picture={item.mainPicture}
              />
            ))}
          </Box>
        </ScrollView>
      </SafeView>
    </Box>
  );
};

export default ItemsList;
