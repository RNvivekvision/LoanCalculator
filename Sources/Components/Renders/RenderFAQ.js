import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNText, RNStyles, RNImage } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

const RenderFAQ = ({ item, index }) => {
  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} style={styles.card}>
        <RNText style={styles.title}>{item.title}</RNText>
        <RNImage source={Images.ArrowRightShift} style={RNStyles.icon} />
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1),
    borderRadius: wp(3),
    marginHorizontal: wp(4),
  },
  card: {
    ...RNStyles.flexRowBetween,
    borderRadius: wp(3),
    height: hp(8),
    backgroundColor: Colors.White + '10',
    paddingHorizontal: wp(5),
  },
  title: {
    flex: 1,
    paddingRight: wp(4),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
  },
});

export default RenderFAQ;
