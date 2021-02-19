import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  index: number;
  barTotalSize: number;
};

const markerWidth = 1;
const styles = StyleSheet.create({
  markerContainer: {
    flex: 1,
  },
  marker: {
    width: markerWidth,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#AAA8A1',
    justifyContent: 'center',
  },
});

const LegendMarker = ({ index, barTotalSize }: Props) => (
  <View
    style={[
      styles.markerContainer,
      {
        alignItems: index === 0 ? 'flex-start' : 'center',
        marginLeft: index === 0 ? (barTotalSize - markerWidth) / 2 : 0,
      },
    ]}
  >
    <View style={styles.marker} />
  </View>
);

export default LegendMarker;
