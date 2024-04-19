import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNIcon, RNContainer } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { DummyData } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { useInset, useUserClicks } from '../../Hooks';
import {
  RenderOnboarding,
  LOPagginationDots,
  NativeAd,
  BannerAd,
} from '../../Components';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Onboarding = ({ navigation }) => {
  const { increaseCount } = useUserClicks();
  const scroll = useSharedValue(0);
  const styles = useStyles();

  const onScroll = useAnimatedScrollHandler(({ contentOffset }) => {
    scroll.value = contentOffset.x;
  }, []);

  const onTrueIconPress = () => {
    increaseCount();
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

      <BannerAd />
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
      flex: 2,
      paddingVertical: hp(4),
    },
    ads: {
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Bold,
    },
  });
};

export default Onboarding;
