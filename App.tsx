import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import ItemsProvider from './src/contexts/itemsContext';
import RootStack from './src/routes';
import theme from './src/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar style="dark" />
    <SafeAreaProvider>
      <ItemsProvider>
        <RootStack />
      </ItemsProvider>
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
