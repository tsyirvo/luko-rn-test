import React from 'react';

import { Box, Text } from '../../shared/primitives';
import { ItemProps } from '../Item.types';

type Props = Pick<ItemProps, 'title' | 'price'>;

const ItemDetails = ({ title, price }: Props) => (
  <Box
    bg="white"
    height={100}
    justifyContent="space-between"
    px="large"
    py="medium"
    borderBottomLeftRadius="medium"
    borderBottomRightRadius="medium"
    overflow="hidden"
  >
    <Text>{title}</Text>
    <Text variant="small" color="blueGrey">{`${price}€`}</Text>
  </Box>
);

export default ItemDetails;
