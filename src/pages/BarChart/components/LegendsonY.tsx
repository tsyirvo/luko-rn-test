import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { supportedSteps } from '../utils/constants';

type Props = {
  currentMaxValue: number;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    minWidth: 45,
    // width: 50,
  },
});

const LegendsOnY = ({ currentMaxValue }: Props) => {
  const [range, setRange] = useState([] as number[]);

  const calculateRange = () => {
    let step = 2.5;
    const averageStep = Math.ceil(currentMaxValue) / 5;

    const closestStep = supportedSteps.reduce((prev, curr) =>
      Math.abs(curr - averageStep) < Math.abs(prev - averageStep) ? curr : prev,
    );

    if (closestStep >= averageStep) {
      step = closestStep;
    } else {
      const stepIndex = supportedSteps.findIndex(
        (value) => value === closestStep,
      );

      step = supportedSteps[stepIndex + 1];
    }

    const newRange = [...Array(5)].map((_, index) => step * (index + 1));

    setRange(newRange.reverse());
  };

  useEffect(() => calculateRange(), [currentMaxValue]);

  return (
    <View style={styles.container}>
      {range.map((value) => (
        <Text key={value}>{`${value}W`}</Text>
      ))}
      <Text />
    </View>
  );
};

export default LegendsOnY;
