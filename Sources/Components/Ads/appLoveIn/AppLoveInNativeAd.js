import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppLoveinAds } from '../../../Hooks';
import {
  AdvertiserView,
  BodyView,
  CallToActionView,
  IconView,
  MediaView,
  NativeAdView,
  OptionsView,
  StarRatingView,
  TitleView,
} from 'react-native-applovin-max';
import { hp, wp } from '../../../Theme';

const AppLoveInNativeAd = () => {
  const nativeAdRef = useRef();
  const { loveinAdsLoaded, nativeId } = useAppLoveinAds();

  useEffect(() => {
    nativeAdRef.current?.loadAd();
  }, []);

  return loveinAdsLoaded ? (
    <NativeAdView
      ref={nativeAdRef}
      adUnitId={nativeId}
      style={{ height: hp(21), width: wp(100) }}
      onAdLoaded={v => {
        console.log('NativeAdView onAdLoaded -> ' + v);
      }}
      onAdLoadFailed={e => {
        console.log('NativeAdView onAdLoadFailed -> ', e);
      }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <IconView style={styles.icon} />
          <View style={{ flexDirection: 'column', flexGrow: 1 }}>
            <TitleView numberOfLines={1} style={styles.title} />
            <AdvertiserView numberOfLines={1} style={styles.advertiser} />
            <StarRatingView style={styles.starRatingView} />
          </View>
          <OptionsView style={styles.optionsView} />
        </View>
        <BodyView numberOfLines={2} style={styles.body} />
        <MediaView style={styles.mediaView} />
        <View style={{ height: 10 }} />
        <CallToActionView style={styles.callToAction} />
      </View>
    </NativeAdView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // must have a view behind for touch event propagation
    top: '30%',
    width: '100%',
    padding: 10,
    backgroundColor: '#0583aa',
    zIndex: 1,
    elevation: 1,
  },
  nativead: {
    padding: 10,
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  icon: {
    width: 48,
    height: 48,
  },
  title: {
    width: 260,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#fff',
  },
  advertiser: {
    fontSize: 12,
    textAlign: 'left',
    color: '#fff',
  },
  starRatingView: {
    fontSize: 10, // size of each star as unicode symbol
    color: '#ffe234',
    backgroundColor: '#EFEFEF',
  },
  optionsView: {
    width: 20,
    height: 20,
    backgroundColor: '#EFEFEF',
  },
  body: {
    padding: 8,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
  mediaView: {
    alignSelf: 'center',
    width: NATIVE_AD_MEDIAVIEW_WIDTH,
    height: NATIVE_AD_MEDIAVIEW_HEIGHT,
    maxWidth: NATIVE_AD_MEDIAVIEW_WIDTH,
    maxHeight: NATIVE_AD_MEDIAVIEW_HEIGHT,
    zIndex: 1,
    elevation: 1,
  },
  callToAction: {
    padding: 8,
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    backgroundColor: '#2d545e',
  },
});
const NATIVE_AD_MEDIAVIEW_WIDTH = 340;
const NATIVE_AD_MEDIAVIEW_HEIGHT = 200;

export default AppLoveInNativeAd;
