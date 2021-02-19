import React, { useRef, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';

import { isAndroid, MARGIN } from '../utils/constants';

import LegendMarker from './LegendMarker';

interface Props {
  graphWidth: number;
  legends: string[];
  barCount: number;
  barWidth: number;
  isYearly: boolean;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: MARGIN,
    borderTopWidth: isAndroid ? 1 : 0,
    borderTopColor: '#AAA8A1',
    borderRadius: 1,
  },
  text: {
    marginTop: 4,
    color: '#96948A',
    fontSize: 10,
  },
});

const LegendsOnX = ({
  graphWidth,
  legends,
  barWidth,
  barCount,
  isYearly,
}: Props) => {
  const [hasBeenMeasured, setHasBeenMeasured] = useState(false);
  const legendWidth = useRef(0);

  // Calculus for the bar sizes and the associated margins
  const totalBarSizes = barCount * barWidth;
  const totalMargins = graphWidth - totalBarSizes;
  const barMargin = totalMargins / barCount;
  const barTotalSize = barMargin + barWidth;

  // Space taken for a single legend
  const barPerLegend = barCount / legends.length;
  const legendTotalWidth = Math.ceil(barPerLegend) * barTotalSize;

  const getLegendSize = (index: number) => {
    if (barPerLegend !== 1 && index === 0) {
      if (!hasBeenMeasured) return 'auto';

      return (legendTotalWidth + barTotalSize) / 2;
    }

    // if (isYearly && !isAndroid) {
    //   // if (index === 0 || index === legends.length - 1) return legendTotalWidth;
    //   if (index === legends.length - 1) return legendTotalWidth;
    //   if (index % 2 !== 0) return 0;

    //   return legendTotalWidth * 2;
    // }

    return legendTotalWidth;
  };
  const getLegendAlignment = (index: number) => {
    if (barPerLegend !== 1 && index === 0) return 'left';
    // if (isYearly && !isAndroid && index === 0) return 'left';

    return 'center';
  };
  const getFirstLegendPosition = (index: number) => {
    if (barPerLegend !== 1 && index === 0 && hasBeenMeasured) {
      if (legendWidth.current >= barTotalSize) return 0;

      return (barTotalSize - legendWidth.current) / 2;
    }

    return 0;
  };

  const onLayout = (event: LayoutChangeEvent, index: number) => {
    const calculatedWidth = event.nativeEvent.layout.width;

    if (
      barPerLegend !== 1 &&
      index === 0 &&
      !hasBeenMeasured &&
      calculatedWidth !== 0
    ) {
      legendWidth.current = calculatedWidth;
      setHasBeenMeasured(true);
    }
  };

  return (
    <View style={[styles.container, { width: graphWidth }]}>
      {legends.map((legend, index) => (
        <View
          key={legend}
          style={{
            width: getLegendSize(index),
          }}
        >
          {isAndroid && legend !== '' && (
            <LegendMarker index={index} barTotalSize={barTotalSize} />
          )}

          <Text
            onLayout={(e) => onLayout(e, index)}
            style={[
              styles.text,
              {
                textAlign: getLegendAlignment(index),
                marginLeft: getFirstLegendPosition(index),
              },
            ]}
          >
            {(() => {
              if (isYearly) {
                // if (!isAndroid) return index % 2 !== 0 ? '' : legend

                return legend.substr(0, 1);
              }

              return legend;
            })()}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default LegendsOnX;
