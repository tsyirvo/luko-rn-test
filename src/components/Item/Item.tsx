import React from 'react';
import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';
import { Box } from '../shared/primitives';

import ItemDetails from './components/ItemDetails';
import ItemPicture from './components/ItemPicture';
import { ItemProps as Props } from './Item.types';

const styles = StyleSheet.create({
  container: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const Item = ({ picture, title, price }: Props) => (
  <Box width={150} mt="large" style={styles.container}>
    <ItemPicture picture={picture} />
    <ItemDetails title={title} price={price} />
  </Box>
);

export default Item;
