import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, ScrollView } from 'react-native';

import AssetUpload from '../../components/AssetUpload';
import ItemDocuments from '../../components/ItemDocuments';
import ItemForm from '../../components/ItemForm';
import useForm from '../../components/ItemForm/hooks/useForm';
import NewItemHeader from '../../components/NewItemHeader';
import { Box } from '../../components/shared/primitives';
import SafeView from '../../components/shared/SafeView';
import { useItemsContext } from '../../contexts/itemsContext';
import { NewItemScreenNavigationProp } from '../../routes/routes.types';

const NewItem = () => {
  const navigation = useNavigation();
  const { params } = useRoute<NewItemScreenNavigationProp>();
  const {
    formData,
    isFormValid,
    setName,
    setPurchaseValue,
    setDescription,
    setMainPicture,
    setReceipt,
    setAdditionalPicture,
  } = useForm();
  const { setItems, setContractItems, contractItems } = useItemsContext();

  const onSavePress = useCallback(() => {
    const { contract } = params;
    const itemPrice = Number(formData.purchaseValue);
    const isContractAmountValid =
      contractItems[contract].total + itemPrice <= 40000;

    const isItemAlreadyInsured = () => {
      // Check for the current item name in all contracts
      const isPresentInContract = Object.values(contractItems).map((c) =>
        c.items.includes(formData.name),
      );

      // Confirm every contract does not include it
      return isPresentInContract.every((c) => c === false);
    };

    const saveNewItem = () => {
      setItems((prev) => [
        ...prev,
        {
          contract,
          ...formData,
        },
      ]);
      setContractItems((prev) => ({
        ...prev,
        [contract]: {
          total: prev[contract].total + itemPrice,
          items: [...prev[contract].items, formData.name],
        },
      }));
    };

    if (isContractAmountValid && isItemAlreadyInsured()) {
      saveNewItem();

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'ItemsList',
          },
        ],
      });
    } else {
      Alert.alert(
        'Cannot add this item',
        'The item is already insured or too valuable',
      );
    }
  }, [formData, params, setItems, navigation, contractItems, setContractItems]);

  return (
    <Box flex={1} bg="white">
      <SafeView>
        <NewItemHeader isFormValid={isFormValid} onSavePress={onSavePress} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Box px="large">
            <Box alignItems="center" pt="xLarge">
              <AssetUpload
                title="Add Photo"
                type="picture"
                uri={formData.mainPicture}
                onPictureAdd={setMainPicture}
              />
            </Box>

            <ItemForm
              formData={formData}
              setName={setName}
              setPurchaseValue={setPurchaseValue}
              setDescription={setDescription}
            />

            <ItemDocuments
              receiptUri={formData.receipt}
              additionalPictureUri={formData.additionalPicture}
              setReceipt={setReceipt}
              setAdditionalPicture={setAdditionalPicture}
            />
          </Box>
        </ScrollView>
      </SafeView>
    </Box>
  );
};

export default NewItem;
