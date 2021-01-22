import { useEffect, useState } from 'react';

export type UseFormOutput = {
  formData: {
    name: string;
    // category: string;
    // purchaseDate: Date;
    purchaseValue: string;
    description: string;
    mainPicture: string;
    receipt: string;
    additionalPicture: string;
  };
  isFormValid: boolean;
  setName: (value: string) => void;
  // setCategory: (value: string) => void;
  // setPurchaseDate: (value: Date) => void;
  setPurchaseValue: (value: string) => void;
  setDescription: (value: string) => void;
  setMainPicture: (value: string) => void;
  setReceipt: (value: string) => void;
  setAdditionalPicture: (value: string) => void;
};

const useForm = (): UseFormOutput => {
  const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [purchaseValue, setPurchaseValue] = useState('');
  const [description, setDescription] = useState('');
  const [mainPicture, setMainPicture] = useState('');
  const [receipt, setReceipt] = useState('');
  const [additionalPicture, setAdditionalPicture] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = !!name && !!purchaseValue && !!mainPicture && !!receipt;

    setIsFormValid(isValid);
  }, [name, purchaseValue, mainPicture, receipt]);

  return {
    formData: {
      name,
      // category,
      // purchaseDate,
      purchaseValue,
      description,
      mainPicture,
      receipt,
      additionalPicture,
    },
    isFormValid,
    setName,
    // setPurchaseDate,
    setPurchaseValue,
    // setCategory,
    setDescription,
    setMainPicture,
    setReceipt,
    setAdditionalPicture,
  };
};

export default useForm;
