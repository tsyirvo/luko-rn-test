import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Pressable, Image, StyleSheet } from 'react-native';

import { Box, Text } from '../shared/primitives';
import theme from '../../styles/theme';

export type AssetType = 'picture' | 'receipt';

type Props = {
  title: string;
  type: AssetType;
  uri: string;
  onPictureAdd: (uri: string) => void;
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
});

const AssetUpload = ({ title, type, uri, onPictureAdd }: Props) => {
  const pickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      onPictureAdd(result.uri);
    }
  }, [onPictureAdd]);

  return (
    <Pressable onPress={pickImage}>
      <Box
        borderStyle="dotted"
        borderWidth={2}
        borderColor="blueGrey"
        size={120}
        justifyContent="center"
        alignItems="center"
        borderRadius="medium"
        overflow="hidden"
      >
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <>
            <Ionicons
              name={type === 'picture' ? 'camera' : 'receipt'}
              size={32}
              color={theme.colors.blue}
            />

            <Text mt="small">{title}</Text>
          </>
        )}
      </Box>
    </Pressable>
  );
};

export default AssetUpload;
