import React, { useEffect, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

import { Box, Text } from '../../components/shared/primitives';
import SafeView from '../../components/shared/SafeView';

import {
  barWidth,
  graphHeight,
  graphWidth,
  width,
  MARGINS,
  dataset,
} from './constants';
import Bar from './Bar';
import XAxis from './XAxis';
import YAxis from './YAxis';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: graphWidth * 2,
    height: graphHeight,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});

const Charts = () => {
  const [isShowingBar, setIsShowingBar] = useState(false);
  const [selectedBar, setSelectedBar] = useState(-1);
  const [graphIndex, setGraphIndex] = useState(0);
  const [currentDataset, setCurrentDataset] = useState(
    dataset.data.slice(0, 12),
  );
  const [range, setRange] = useState([
    Math.min(...currentDataset),
    Math.max(...currentDataset),
  ]);

  useEffect(() => {
    setRange([Math.min(...currentDataset), Math.max(...currentDataset)]);
  }, [currentDataset]);

  const onPress = (index: number) => {
    setIsShowingBar(index !== selectedBar);
    setSelectedBar(index === selectedBar ? -1 : index);
  };

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = nativeEvent.contentOffset.x / graphWidth;

    if (graphIndex !== index && Number.isInteger(index)) {
      setGraphIndex(index);

      const firstDatasetNewIndex = index * 12;
      setCurrentDataset(
        dataset.data.slice(firstDatasetNewIndex, firstDatasetNewIndex + 12),
      );
    }

    if (isShowingBar) setIsShowingBar(false);
  };

  return (
    <Box flex={1} bg="paleGreyTwo">
      <SafeView>
        <Text pb={50}>Charts Bis</Text>

        <Box width={graphWidth} height={25} mb={10}>
          {isShowingBar && (
            <Box
              position="absolute"
              left={selectedBar * (barWidth + MARGINS) - 20}
              bg="paleGreyThree"
              px={15}
              borderRadius={10}
            >
              <Text>Tooltip</Text>
            </Box>
          )}
        </Box>

        <Box pb={MARGINS}>
          <YAxis minY={range[0]} maxY={range[1]} />
          <XAxis />
          <Box mr={50}>
            <InvertibleScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 50}
              onScroll={onScroll}
              scrollEventThrottle={16}
              // inverted
            >
              <View style={styles.container}>
                {dataset.data.map((bar, index) => (
                  <Bar
                    key={bar}
                    isPending={index === 11 || index > 21}
                    bar={bar}
                    maxY={range[1]}
                    onPress={onPress}
                    index={index}
                  />
                ))}
              </View>
            </InvertibleScrollView>
          </Box>
        </Box>
      </SafeView>
    </Box>
  );
};

export default Charts;
