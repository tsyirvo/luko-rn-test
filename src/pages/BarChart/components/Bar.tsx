import React from 'react';
import { StyleSheet, View } from 'react-native';

import { isAndroid } from '../utils/constants';

type Props = {
  barWidth: number;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2D50E6',
  },
});

const Bar = ({ barWidth }: Props) => {
  const getRadiusStyles = () => {
    const radiuses = isAndroid ? 2 : Math.floor(barWidth / 4);

    const radiusStyles = {
      borderTopLeftRadius: radiuses,
      borderTopRightRadius: radiuses,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    };

    if (!isAndroid) {
      radiusStyles.borderBottomLeftRadius = radiuses;
      radiusStyles.borderBottomRightRadius = radiuses;
    }

    return radiusStyles;
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: barWidth,
          backgroundColor: isAndroid ? 'transparent' : '#EAE9E3',
          ...getRadiusStyles(),
        },
      ]}
    >
      <View
        style={[
          styles.bar,
          {
            height: Math.random() * 600,
            ...getRadiusStyles(),
          },
        ]}
      />
    </View>
  );
};

export default Bar;
