import React, { useMemo } from 'react';
import { Image, StyleSheet } from 'react-native';

import { Box } from '../../shared/primitives';
import { ItemProps } from '../Item.types';

type Props = Pick<ItemProps, 'picture'>;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

const ItemPicture = ({ picture }: Props) => {
  const source = useMemo(() => ({ uri: picture }), [picture]);

  return (
    <Box
      borderTopLeftRadius="medium"
      borderTopRightRadius="medium"
      overflow="hidden"
    >
      <Image source={source} style={styles.image} resizeMode="cover" />
    </Box>
  );
};

export default ItemPicture;
