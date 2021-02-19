import React, { useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import SafeView from '../../components/shared/SafeView';

import { Temporality } from './BarChart.types';
import Graph from './components/Graph';
import GraphOverview from './components/GraphOverview';
import LegendsOnX from './components/LegendsOnX';
import LegendsOnY from './components/LegendsonY';
import { chartOptions, MARGIN, isAndroid } from './utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: MARGIN,
    // backgroundColor: 'purple',
  },
  graphContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

type Props = {
  temporality: Temporality;
};

const BarChart = ({ temporality = 'yearly' }: Props) => {
  const [graphWidth, setGraphWidth] = useState(0);
  const [currentMaxValue, setCurrentMaxValue] = useState(Math.random() * 10200);
  const barWidth = useRef(0);
  const options = useRef(chartOptions[temporality]);

  const getGraphWidth = (event: LayoutChangeEvent) => {
    const calculatedWidth = event.nativeEvent.layout.width;
    const iosBarWidth = calculatedWidth / options.current.barCount / 2;

    barWidth.current = isAndroid
      ? options.current.androidBarWidth
      : iosBarWidth;
    setGraphWidth(calculatedWidth);
  };

  useEffect(() => {
    setCurrentMaxValue(Math.random() * 600);
  }, []);

  return (
    <View style={styles.container}>
      <SafeView>
        <GraphOverview />

        <View style={styles.graphContainer}>
          <Graph
            getGraphWidth={getGraphWidth}
            barCount={options.current.barCount}
            barWidth={barWidth.current}
          />
          <LegendsOnY currentMaxValue={currentMaxValue} />
        </View>

        <LegendsOnX
          graphWidth={graphWidth}
          legends={options.current.legends}
          barCount={options.current.barCount}
          barWidth={barWidth.current}
          isYearly={temporality === 'yearly'}
        />
      </SafeView>
    </View>
  );
};
export default BarChart;
