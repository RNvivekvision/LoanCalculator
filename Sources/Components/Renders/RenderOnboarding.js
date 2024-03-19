import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNImage } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const RenderOnboarding = ({ item }) => {
  return (
    <View style={styles.container}>
      <RNImage source={item.image} style={RNStyles.image60} />
      <RNText style={styles.title}>{item.title}</RNText>
      <View style={styles.devider} />
      <RNText style={styles.text}>{item.text}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: wp(100),
  },
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Bold,
  },
  text: {
    textAlign: 'center',
    width: '85%',
    fontSize: FontSize.font14,
    color: Colors.White + '60',
  },
  devider: {
    height: wp(0.5),
    backgroundColor: Colors.Button,
    width: '15%',
    marginVertical: hp(1),
  },
});

export default RenderOnboarding;
