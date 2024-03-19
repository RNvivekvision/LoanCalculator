import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';
import RNImage from './RNImage';
import RNGradient from './RNGradient';

const RNIcon = ({
  gradient,
  icon,
  colors,
  onPress,
  containerStyle,
  iconStyle,
}) => {
  return gradient ? (
    <RNGradient
      colors={colors || [Colors.Primary1, Colors.Primary2]}
      style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.touchable}>
        <RNImage source={icon} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    </RNGradient>
  ) : (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <RNImage source={icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};

const size = wp(8);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: size,
    height: size,
  },
  touchable: {
    ...RNStyles.center,
    width: '100%',
    height: '100%',
  },
  icon: {
    ...RNStyles.image80,
  },
});

export default RNIcon;
