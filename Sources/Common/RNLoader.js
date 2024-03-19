import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../Theme';
import RNStyles from './RNStyles';
const RNLoader = ({ visible, style, color, size }) => {
  return visible ? (
    <View style={[styles.Container, style]}>
      <ActivityIndicator
        size={size ?? 'large'}
        color={color || Colors.Loader}
      />
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.Black + '60',
    zIndex: 10000,
  },
});
export default RNLoader;
