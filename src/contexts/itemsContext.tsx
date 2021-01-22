import React, {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react';

export type Item = {
  contract: string;
  name: string;
  category: string;
  purchaseDate: Date;
  purchaseValue: string;
  description: string;
  mainPicture: string;
  receipt: string;
  additionalPicture: string;
};
export type Contract = {
  total: number;
  items: string[];
};
export type ContractCities = 'paris' | 'london';
export type ItemsContextType = {
  items: Item[];
  contractItems: {
    paris: Contract;
    london: Contract;
  };
};

type Props = {
  children: ReactElement;
};

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  contractItems: {
    paris: {
      total: 0,
      items: [],
    },
    london: {
      total: 0,
      items: [],
    },
  },
});

export const useItemsContext = () => useContext(ItemsContext);

const ItemsProvider = ({ children }: Props) => {
  const [items, setItems] = useState([]);
  const [contractItems, setContractItems] = useState({
    paris: {
      total: 0,
      items: [],
    },
    london: {
      total: 0,
      items: [],
    },
  });

  const contextValues = useMemo(
    () => ({
      items,
      setItems,
      contractItems,
      setContractItems,
    }),
    [items, contractItems],
  );

  return (
    <ItemsContext.Provider value={contextValues}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
