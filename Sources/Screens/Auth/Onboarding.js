import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNIcon, RNContainer } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { DummyData } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { useGoogleAds, useInset } from '../../Hooks';
import {
  RenderOnboarding,
  LOPagginationDots,
  NativeAd,
} from '../../Components';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';

const Onboarding = ({ navigation }) => {
  const { Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const { showInterstitialAd } = useGoogleAds();
  const scroll = useSharedValue(0);
  const styles = useStyles();
  // console.log(JSON.stringify({ Admob, Admanager1, Admanager2 }, null, 2));
  const onScroll = useAnimatedScrollHandler(({ contentOffset }) => {
    scroll.value = contentOffset.x;
  }, []);

  const onTrueIconPress = async () => {
    await showInterstitialAd();
    navigation.navigate(NavRoutes.TermsAndCondition);
  };

  return (
    <RNContainer style={styles.container}>
      <View style={styles.flatlistContainer}>
        <RNIcon
          icon={Images.True}
          containerStyle={styles.trueButton}
          onPress={onTrueIconPress}
        />
        <Reanimated.FlatList
          data={DummyData.onboarding}
          keyExtractor={(v, i) => String(i)}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0.16}
          onScroll={onScroll}
          renderItem={({ item, index }) => (
            <RenderOnboarding item={item} index={index} scroll={scroll} />
          )}
        />
        <LOPagginationDots
          scroll={scroll}
          length={DummyData.onboarding.length}
        />
      </View>

      <NativeAd />
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      paddingBottom: inset.bottom,
    },
    trueButton: {
      position: 'absolute',
      top: inset.top + hp(2),
      right: wp(6),
      width: wp(15),
      borderRadius: wp(3),
      zIndex: 1,
    },
    flatlistContainer: {
      flex: 3,
      paddingVertical: hp(4),
    },
    ads: {
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Bold,
    },
  });
};

export default Onboarding;
