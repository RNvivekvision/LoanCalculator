import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import NativeAdView, {
//   CallToActionView,
//   HeadlineView,
//   IconView,
//   StarRatingView,
//   StoreView,
//   TaglineView,
//   TestIds,
// } from 'react-native-admob-native-ads';
import { useSelector } from 'react-redux';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';

const GoogleNativeAd = () => {
  const NativeAdRef = useRef();
  const { adData, Admob } = useSelector(({ UserReducer }) => UserReducer);
  const [State, setState] = useState({ showButton: false });
  const adUnitID = __DEV__ ? TestIds.Image : Admob?.nativeAdvanced;

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

  return null;

  return (
    adUnitID && (
      <NativeAdView
        ref={NativeAdRef}
        show={false}
        adUnitID={adUnitID}
        onAdLoaded={() => setState(p => ({ ...p, showButton: true }))}
        onAdFailedToLoad={() => setState(p => ({ ...p, showButton: false }))}>
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
    paddingVertical: hp(1),
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
