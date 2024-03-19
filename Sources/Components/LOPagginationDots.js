import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, wp } from '../Theme';
import { RNStyles } from '../Common';
import Reanimated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

const dotSize = wp(3);
const increase = wp(8);
const width = wp(100);

const LOPagginationDots = ({ scroll, length }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length }).map((v, i) => (
        <Dot key={i} index={i} scroll={scroll} />
      ))}
    </View>
  );
};

const Dot = ({ index, scroll }) => {
  const dotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const Width = interpolate(
      scroll.value,
      inputRange,
      [dotSize, dotSize + increase, dotSize],
      Extrapolation.CLAMP,
    );
    const backgroundColor = interpolateColor(scroll.value, inputRange, [
      Colors.White + '30',
      Colors.White,
      Colors.White + '30',
    ]);
    return {
      backgroundColor,
      width: Width,
    };
  }, []);

  return <Reanimated.View style={[styles.dots, dotStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    alignSelf: 'center',
  },
  dots: {
    height: dotSize,
    borderRadius: 100,
    marginHorizontal: wp(2),
  },
});

export default LOPagginationDots;
