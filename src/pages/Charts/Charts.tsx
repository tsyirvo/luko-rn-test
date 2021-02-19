import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';

import { Box, Text } from '../../components/shared/primitives';
import SafeView from '../../components/shared/SafeView';

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};
const config = {
  // backgroundGradientFrom: '#fb8c00',
  // backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
  barRadius: 20,
};
const { width } = Dimensions.get('window');

const Charts = () => (
  <Box flex={1} bg="black">
    <SafeView>
      <Text>Charts</Text>

      <ScrollView horizontal>
        <BarChart
          data={data}
          width={width * 2}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={config}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          withInnerLines={false}
          showBarTops={false}
        />
      </ScrollView>
    </SafeView>
  </Box>
);

export default Charts;
