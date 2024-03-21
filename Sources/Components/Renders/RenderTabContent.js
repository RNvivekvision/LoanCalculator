import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const RenderTabContent = ({ item }) => {
  return (
    <View style={styles.container}>
      <RNImage source={item.image} style={styles.image} />
      <View style={styles.content}>
        <RNText family={FontFamily.Medium}>{item.title}</RNText>
        <RNText
          size={FontSize.font12}
          family={FontFamily.Medium}
          color={Colors.White + '50'}>
          {item.text}
        </RNText>
      </View>
    </View>
  );
};

const imgSize = wp(10);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    backgroundColor: Colors.White + '10',
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    height: hp(10),
    borderRadius: wp(4),
  },
  image: {
    width: imgSize,
    height: imgSize,
    marginHorizontal: wp(4),
  },
  content: {
    borderLeftWidth: wp(0.2),
    borderLeftColor: Colors.White,
    flex: 1,
    height: '100%',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    justifyContent: 'space-between',
  },
});

export default RenderTabContent;
