import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Box, Text } from '../shared/primitives';
import theme from '../../styles/theme';
import { UseFormOutput } from '../ItemForm/hooks/useForm';

type Props = Pick<UseFormOutput, 'isFormValid'> & {
  onSavePress?: () => void;
};

const NewItemHeader = ({ isFormValid, onSavePress }: Props) => {
  const navigation = useNavigation();

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Box
      bg="white"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottomColor="paleGreyThree"
      borderBottomWidth={1}
      px="large"
      pb="small"
    >
      <Pressable onPress={onBackPress}>
        <Ionicons name="close" size={22} color={theme.colors.black} />
      </Pressable>

      <Text>New Object</Text>

      <Pressable onPress={onSavePress} disabled={!isFormValid}>
        <Text color={isFormValid ? 'blue' : 'blueGrey'}>Save</Text>
      </Pressable>
    </Box>
  );
};

export default NewItemHeader;
