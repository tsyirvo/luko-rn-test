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
    <Stack.Navigator initialRouteName="BarChart" screenOptions={screenOptions}>
      <Stack.Screen name="BarChart" component={Pages.BarChart} />
      <Stack.Screen name="Charts" component={Pages.Charts} />
      <Stack.Screen name="ChartsBis" component={Pages.ChartsBis} />
      {/* <Stack.Screen name="ItemsList" component={Pages.ItemsList} />
      <Stack.Screen
        name="ContractSelection"
        component={Pages.ContractSelection}
      />
      <Stack.Screen name="NewItem" component={Pages.NewItem} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
