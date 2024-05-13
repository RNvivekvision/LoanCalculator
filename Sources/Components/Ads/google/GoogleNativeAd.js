import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAdView, {
  CallToActionView,
  HeadlineView,
  IconView,
  StarRatingView,
  StoreView,
  TaglineView,
  TestIds,
} from 'react-native-admob-native-ads';
import { useSelector } from 'react-redux';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';

const GoogleNativeAd = () => {
  const NativeAdRef = useRef();
  const { adData, Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const [State, setState] = useState({
    showButton: false,
    adUnitID: Admob?.nativeAdvanced,
    index: 0,
  });
  const adUnitID = __DEV__ ? TestIds.Image : State.adUnitID;

  // styles...
  const containerBgColor = {
    backgroundColor: adData?.appMoreFieldAdsBackgroundColor || Colors.Black,
  };
  const textColor = { color: adData?.appMoreFieldAdsTextColor || Colors.White };
  const buttonBgColor = {
    backgroundColor: adData?.appMoreFieldAdsButtonColor || Colors.Button,
  };
  const buttonTextColor = {
    color: adData?.appMoreFieldAdsButtonTextColor || Colors.White,
  };

  useEffect(() => {
    NativeAdRef.current?.loadAd();
  }, []);

  const onAdFailedToLoad = e => {
    console.log('Error NativeAd -> ', e);
    setState(p => ({ ...p, showButton: false }));
    const newIndex = State.index + 1;
    if (newIndex == 1) {
      setState(p => ({
        ...p,
        adUnitID: Admanager1?.nativeAdvanced,
        index: newIndex,
      }));
    } else if (newIndex == 2) {
      setState(p => ({
        ...p,
        adUnitID: Admanager2?.nativeAdvanced,
        index: newIndex,
      }));
    }
  };

  return (
    adUnitID && (
      <NativeAdView
        ref={NativeAdRef}
        show={false}
        adUnitID={adUnitID}
        onAdLoaded={() => setState(p => ({ ...p, showButton: true }))}
        onAdFailedToLoad={onAdFailedToLoad}>
        <View style={styles.container}>
          <IconView style={styles.iconView} />

          <View style={styles.content}>
            <HeadlineView
              hello="abc"
              style={[styles.headlineView, textColor]}
            />
            <TaglineView
              numberOfLines={2}
              style={[styles.taglineView, textColor]}
            />

            <View style={styles.storeViewContainer}>
              <StoreView style={[styles.taglineView, textColor]} />
              <StarRatingView
                starSize={12}
                fullStarColor={Colors.Button}
                emptyStarColor={Colors.White}
                style={styles.starRating}
              />
            </View>
          </View>

          {State.showButton && (
            <CallToActionView
              style={[styles.button, buttonBgColor]}
              textStyle={[styles.buttonText, buttonTextColor]}
              allCaps={true}
            />
          )}
        </View>
      </NativeAdView>
    )
  );
};

const iconSize = wp(18);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    backgroundColor: Colors.Black,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  iconView: {
    width: iconSize,
    height: iconSize,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(2),
  },
  headlineView: {
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
  },
  taglineView: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
  },
  storeViewContainer: {
    ...RNStyles.flexRow,
    paddingTop: hp(1),
  },
  starRating: {
    marginLeft: wp(2),
  },
  button: {
    ...RNStyles.center,
    width: wp(20),
    height: wp(10),
    backgroundColor: Colors.Button,
  },
  buttonText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
  },
});

export default GoogleNativeAd;
