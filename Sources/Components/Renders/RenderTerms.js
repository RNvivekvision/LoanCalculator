import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const RenderTerms = ({ item }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <View style={styles.image}>
          <RNImage source={item.image} style={RNStyles.image60} />
        </View>
        <RNText style={styles.title}>{item.title}</RNText>
      </View>
      <RNText style={styles.text}>{item.text}</RNText>
    </>
  );
};

const imageSize = wp(8);
const styles = StyleSheet.create({
  titleContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBlockColor: Colors.White + '50',
  },
  image: {
    ...RNStyles.center,
    width: imageSize,
    height: imageSize,
    backgroundColor: Colors.Button,
    borderRadius: 100,
  },
  title: {
    fontFamily: FontFamily.Medium,
    paddingHorizontal: wp(2),
  },
  text: {
    fontSize: FontSize.font12,
    color: Colors.White + '50',
    paddingVertical: hp(0.7),
    paddingRight: wp(4),
  },
});

export default RenderTerms;
