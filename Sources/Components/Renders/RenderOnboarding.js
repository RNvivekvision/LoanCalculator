import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNImage } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import Reanimated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const width = wp(100);
const RenderOnboarding = ({ item, index, scroll }) => {
  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = interpolate(
      scroll.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scroll.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const translateY = interpolate(
      scroll.value,
      inputRange,
      [width, 0, -width],
      Extrapolation.CLAMP,
    );
    const rotate = interpolate(
      scroll.value,
      inputRange,
      [-40, 0, 40],
      Extrapolation.CLAMP,
    );
    const translateX = interpolate(
      scroll.value,
      inputRange,
      [-width, 0, width],
      Extrapolation.CLAMP,
    );

    return {
      opacity: opacity,
      transform: [{ scale: scale }, { translateX }, { rotate: `${rotate}deg` }],
    };
  }, []);

  return (
    <Reanimated.View style={[styles.container, animatedStyles]}>
      <RNImage source={item.image} style={RNStyles.image60} />
      <RNText style={styles.title}>{item.title}</RNText>
      <View style={styles.devider} />
      <RNText style={styles.text}>{item.text}</RNText>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: wp(100),
  },
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Bold,
  },
  text: {
    textAlign: 'center',
    width: '85%',
    fontSize: FontSize.font14,
    color: Colors.White + '60',
  },
  devider: {
    height: wp(0.5),
    backgroundColor: Colors.Button,
    width: '15%',
    marginVertical: hp(1),
  },
});

export default RenderOnboarding;
