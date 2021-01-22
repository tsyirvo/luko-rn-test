import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';

type Props = NativeSafeAreaViewProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SafeView = ({ children, ...rest }: Props) => (
  <SafeAreaView style={styles.container} {...rest}>
    {children}
  </SafeAreaView>
);

export default SafeView;
