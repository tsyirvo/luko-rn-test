import { RouteProp } from '@react-navigation/native';

import { ContractCities } from '../contexts/itemsContext';

/* ***** *****  Stack router types  ***** ***** */

export type RootStackParamList = {
  BarChart: undefined;
  Charts: undefined;
  ChartsBis: undefined;
  ItemsList: undefined;
  ContractSelection: undefined;
  NewItem: { contract: ContractCities };
};

/* ***** *****  Pages navigation type  ***** ***** */

export type NewItemScreenNavigationProp = RouteProp<
  RootStackParamList,
  'NewItem'
>;
