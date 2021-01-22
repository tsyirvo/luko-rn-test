import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import * as useForm from '../../components/ItemForm/hooks/useForm';
import ItemsProvider, * as itemsContext from '../../contexts/itemsContext';
import render from '../../tests/utils';

import NewItem from './NewItem';

/* ***** *****  Library mocks  ***** ***** */

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
  })),
  useRoute: () => ({
    params: {
      contract: 'paris',
    },
  }),
}));

/* ***** *****  Contexts mocks  ***** ***** */

const setItems = jest.fn();
const setContractItems = jest.fn();
let contractItems = {
  paris: {
    total: 0,
    items: [],
  },
  london: {
    total: 0,
    items: [],
  },
};
jest.spyOn(itemsContext, 'useItemsContext').mockImplementation(() => ({
  items: [],
  contractItems,
  setItems,
  setContractItems,
}));

let formData = {
  name: '',
  purchaseValue: '',
  description: '',
  mainPicture: '',
  receipt: '',
  additionalPicture: '',
};
let isFormValid = false;
jest.spyOn(useForm, 'default').mockImplementation(() => ({
  formData,
  isFormValid,
  setName: jest.fn(),
  setPurchaseValue: jest.fn(),
  setDescription: jest.fn(),
  setMainPicture: jest.fn(),
  setReceipt: jest.fn(),
  setAdditionalPicture: jest.fn(),
}));

describe('NewItem', () => {
  beforeEach(() => {
    formData = {
      name: '',
      purchaseValue: '',
      description: '',
      mainPicture: '',
      receipt: '',
      additionalPicture: '',
    };
    isFormValid = false;
    contractItems = {
      paris: {
        total: 0,
        items: [],
      },
      london: {
        total: 0,
        items: [],
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not add an item with an empty form', () => {
    const { getByText } = render(
      <ItemsProvider>
        <NewItem />
      </ItemsProvider>,
    );

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    expect(setItems).not.toHaveBeenCalled();
    expect(setContractItems).not.toHaveBeenCalled();
  });

  it('should add an item with a filled form', () => {
    formData = {
      ...formData,
      name: 'Test',
      purchaseValue: '100',
      mainPicture: '/pic',
      receipt: '/pic',
    };
    isFormValid = true;

    const { getByText } = render(
      <ItemsProvider>
        <NewItem />
      </ItemsProvider>,
    );

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    expect(setItems).toHaveBeenCalled();
    expect(setContractItems).toHaveBeenCalled();
  });

  it('should not add an item for an unsupported amount', () => {
    formData = {
      ...formData,
      name: 'Test',
      purchaseValue: '100000',
      mainPicture: '/pic',
      receipt: '/pic',
    };
    isFormValid = true;

    const { getByText } = render(
      <ItemsProvider>
        <NewItem />
      </ItemsProvider>,
    );

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    expect(setItems).not.toHaveBeenCalled();
    expect(setContractItems).not.toHaveBeenCalled();
  });

  it('should not add an item if already insured', () => {
    const itemName = 'test';
    formData = {
      ...formData,
      name: itemName,
      purchaseValue: '100',
      mainPicture: '/pic',
      receipt: '/pic',
    };
    isFormValid = true;
    contractItems = {
      ...contractItems,
      paris: {
        total: 100,
        items: [itemName],
      },
    };

    const { getByText } = render(
      <ItemsProvider>
        <NewItem />
      </ItemsProvider>,
    );

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    expect(setItems).not.toHaveBeenCalled();
    expect(setContractItems).not.toHaveBeenCalled();
  });
});
