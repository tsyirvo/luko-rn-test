import React from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';

import { Box } from '../shared/primitives';
import Input from '../shared/primitives/Input';

import { UseFormOutput } from './hooks/useForm';

type Props = Pick<
  UseFormOutput,
  'formData' | 'setName' | 'setPurchaseValue' | 'setDescription'
>;

const ItemForm = ({
  formData,
  setName,
  setPurchaseValue,
  setDescription,
}: Props) => (
  <Box>
    <Input
      label="Name"
      placeholder="John Doe"
      onChangeText={setName}
      clearButtonMode="while-editing"
      returnKeyType="next"
      value={formData.name}
    />

    {/* <Box pt="large">
        <Text color="blueGrey" mb="small" testID="input-label">
          Category
        </Text>
        <Picker
          selectedValue={formData.category}
          // style={{ height: 50, width: 100 }}
          onValueChange={setCategory}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </Box> */}

    {/* <Box pt="large">
        <Text color="blueGrey" mb="small" testID="input-label">
          Purchase Date
        </Text>
        <DateTimePicker value={formData.purchaseDate} onChange={setPurchaseDate} />
      </Box> */}

    <Input
      label="Purchase value"
      placeholder="100"
      onChangeText={setPurchaseValue}
      clearButtonMode="while-editing"
      value={formData.purchaseValue}
      keyboardType="numeric"
    />
    <Input
      label="Description (optional)"
      placeholder="Short description"
      onChangeText={setDescription}
      clearButtonMode="while-editing"
      returnKeyType="done"
      value={formData.description}
    />
  </Box>
);
export default ItemForm;
