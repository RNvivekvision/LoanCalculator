import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNIcon } from '../Common';
import { Colors, FontFamily, wp } from '../Theme';
import { Images } from '../Constants';

const HMFilterTitle = ({ title, onClosePress, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText family={FontFamily.Medium}>{title}</RNText>
      <RNIcon
        icon={Images.Cross}
        iconStyle={styles.icon}
        containerStyle={styles.iconContainer}
        onPress={onClosePress}
      />
    </View>
  );
};

const size = wp(3);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(4),
    paddingVertical: wp(6),
  },
  iconContainer: {
    width: wp(7),
    height: wp(7),
    backgroundColor: Colors.Delete,
    borderRadius: 100,
  },
  icon: {
    width: size,
    height: size,
    tintColor: Colors.White,
  },
});

export default HMFilterTitle;
