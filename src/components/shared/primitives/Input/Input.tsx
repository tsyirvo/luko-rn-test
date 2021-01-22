import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../../../styles/theme';
import { Box } from '../Box';
import { Text } from '../Text';

type Props = TextInputProps & {
  label: string;
};

const styles = {
  fontSize: theme.fontSizes.regular,
  borderBottomWidth: 1,
  padding: 0,
  paddingBottom: 5,
};

const STextInput = styled(TextInput)<{ error?: string }>`
  border-bottom-color: ${(p) => p.theme.colors.blueGrey};
`;

const Input = ({ label, ...props }: Props) => (
  <Box width="100%" mt="large">
    {label && (
      <Text color="blueGrey" mb="small" testID="input-label">
        {label}
      </Text>
    )}

    <STextInput
      style={styles}
      underlineColorAndroid="transparent"
      placeholderTextColor={theme.colors.blueGrey}
      {...props}
    />
  </Box>
);

export default Input;
