import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNStyles, RNIcon, RNText, RNContainer } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { DummyData } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { useInset } from '../../Hooks';
import {
  RenderOnboarding,
  LOPagginationDots,
  NativeAd,
} from '../../Components';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Onboarding = ({ navigation }) => {
  const scroll = useSharedValue(0);
  const styles = useStyles();

  const onScroll = useAnimatedScrollHandler(({ contentOffset }) => {
    scroll.value = contentOffset.x;
  }, []);

  return (
    <RNContainer>
      <View style={styles.flatlistContainer}>
        <RNIcon
          icon={Images.True}
          containerStyle={styles.trueButton}
          onPress={() => navigation.navigate(NavRoutes.TermsAndCondition)}
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

      <View style={styles.adsContainer}>
        <View style={styles.fixedAds}>
          <RNText style={styles.ads}>{'Fix Ads'}</RNText>
        </View>
        <NativeAd />
      </View>
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
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
    fixedAds: {
      ...RNStyles.center,
      backgroundColor: Colors.White + '10',
      paddingVertical: hp(3),
    },
    adsContainer: {
      flex: 1,
      paddingBottom: inset.bottom,
    },
    ads: {
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Bold,
    },
  });
};

export default Onboarding;
