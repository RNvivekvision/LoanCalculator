import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNText, RNStyles, RNImage } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

const RenderFAQ = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <RNText style={styles.title}>{item.title}</RNText>
      <RNImage source={Images.ArrowRightShift} style={RNStyles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.White + '10',
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
    height: hp(8),
  },
  title: {
    flex: 1,
    paddingRight: wp(4),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
  },
});

export default RenderFAQ;
