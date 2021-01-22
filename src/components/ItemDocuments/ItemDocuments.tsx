import React from 'react';

import { Box, Text } from '../shared/primitives';
import AssetUpload from '../AssetUpload';

type Props = {
  receiptUri: string;
  setReceipt: (value: string) => void;
  additionalPictureUri: string;
  setAdditionalPicture: (value: string) => void;
};

const ItemDocuments = ({
  receiptUri,
  setReceipt,
  additionalPictureUri,
  setAdditionalPicture,
}: Props) => (
  <>
    <Text variant="small" color="blueGrey" pb="small" pt="large">
      Documents
    </Text>

    <Box flexDirection="row">
      <Box pr="large">
        <AssetUpload
          title="Add Receipt"
          type="receipt"
          uri={receiptUri}
          onPictureAdd={setReceipt}
        />
      </Box>

      <AssetUpload
        title="Add Photo"
        type="receipt"
        uri={additionalPictureUri}
        onPictureAdd={setAdditionalPicture}
      />
    </Box>
  </>
);

export default ItemDocuments;
