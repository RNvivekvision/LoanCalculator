import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, hp, wp } from '../../Theme';

const NativeAd = () => {
  return (
    <View style={styles.container}>
      <RNText family={FontFamily.Medium}>{'For Native 1'}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    borderWidth: 1,
    borderColor: Colors.White + '50',
    borderStyle: 'dashed',
    borderRadius: wp(3),
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    height: hp(18),
  },
});

export default NativeAd;
