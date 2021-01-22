import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Pages from './pages';
import { RootStackParamList } from './routes.types';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ItemsList" screenOptions={screenOptions}>
      <Stack.Screen name="ItemsList" component={Pages.ItemsList} />
      <Stack.Screen
        name="ContractSelection"
        component={Pages.ContractSelection}
      />
      <Stack.Screen name="NewItem" component={Pages.NewItem} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
