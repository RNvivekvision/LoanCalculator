import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNStyles, RNText } from '../Common';
import { FontFamily, FontSize, hp, wp } from '../Theme';
import { HStack, VStack } from './Renders';
import Reanimated, { FadeIn } from 'react-native-reanimated';

const LOScreens = ({ title, data, horizontal }) => {
  return (
    <Reanimated.View entering={FadeIn.delay(200)} style={styles.container}>
      <RNText pBottom={hp(2)} size={FontSize.font18} family={FontFamily.Bold}>
        {title}
      </RNText>
      <View style={RNStyles.flexWrapHorizontal}>
        {horizontal
          ? data.map((v, i) => <HStack key={i} item={v} index={i} />)
          : data.map((v, i) => <VStack key={i} item={v} index={i} />)}
      </View>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
});

export default LOScreens;
