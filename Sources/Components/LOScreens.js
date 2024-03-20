import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNStyles, RNText } from '../Common';
import { FontFamily, FontSize, hp, wp } from '../Theme';
import { HStack, VStack } from './Renders';

const LOScreens = ({ title, data, horizontal }) => {
  return (
    <View style={styles.container}>
      <RNText pBottom={hp(2)} size={FontSize.font18} family={FontFamily.Bold}>
        {title}
      </RNText>
      <View style={RNStyles.flexWrapHorizontal}>
        {horizontal
          ? data.map((v, i) => <HStack key={i} item={v} />)
          : data.map((v, i) => <VStack key={i} item={v} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
});

export default LOScreens;
