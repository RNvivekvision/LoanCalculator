import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';
const RNLoader = ({ visible, style, color, size }) => {
  return visible ? (
    <View style={[styles.Container, style]}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size={size ?? 'large'}
          color={color || Colors.Loader}
        />
      </View>
    </View>
  ) : null;
};
const size = wp(22);
const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.Black + '60',
    zIndex: 10000,
  },
  loaderContainer: {
    ...RNStyles.center,
    width: size,
    height: size,
    backgroundColor: Colors.White,
    borderRadius: wp(3),
  },
});
export default RNLoader;
