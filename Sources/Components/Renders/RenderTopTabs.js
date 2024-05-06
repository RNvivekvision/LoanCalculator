import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import Reanimated, { SlideInRight } from 'react-native-reanimated';
import { useGoogleAds, useUserClick } from '../../Hooks';
import { useSelector } from 'react-redux';

const RenderTopTabs = ({ item, selectedTab, index, onPress }) => {
  const { incrementCount } = useUserClick();
  const styles = useStyles({ selectedTab });
  const { showInterstitialAd } = useGoogleAds();
  const { innerPageClickCount: count, adData } = useSelector(
    ({ UserReducer }) => UserReducer,
  );

  const _onPress = () => {
    incrementCount();
    showInterstitialAd();
    onPress?.(item);
  };

  return (
    <Reanimated.View
      entering={SlideInRight.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={_onPress}
        style={styles.card}>
        <RNText style={styles.title}>{item.label}</RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const useStyles = ({ selectedTab }) => {
  return StyleSheet.create({
    container: {
      backgroundColor: selectedTab ? Colors.Button : Colors.White + '10',
      borderRadius: wp(3),
      marginHorizontal: wp(2),
    },
    card: {
      ...RNStyles.center,
      width: wp(25),
      paddingVertical: hp(1.5),
      borderRadius: wp(3),
    },
    title: {
      fontSize: FontSize.font14,
      fontFamily: FontFamily.Medium,
      color: selectedTab ? Colors.Black : Colors.White,
    },
  });
};

export default RenderTopTabs;
