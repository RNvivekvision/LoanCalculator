import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../Theme';
import RNStyles from './RNStyles';
const RNImageLoader = ({ visible, containerStyle, size, color }) => {
  return visible ? (
    <View style={[RNStyles.imageLoading, containerStyle]}>
      <ActivityIndicator
        size={size ?? 'large'}
        color={color ?? Colors.Loader}
      />
    </View>
  ) : null;
};
export default RNImageLoader;
