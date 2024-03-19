import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';
import RNImage from './RNImage';

const RNIcon = ({ icon, onPress, containerStyle, iconStyle }) => {
  return (
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
    backgroundColor: Colors.Button,
  },
  icon: {
    ...RNStyles.image60,
  },
});

export default RNIcon;
