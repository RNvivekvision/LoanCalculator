import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  AdIconView,
  TriggerableView,
  withNativeAd,
  NativeAdsManager,
  AdChoicesView,
} from 'react-native-fbads';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';
import { useFacebookAds } from '../../../Hooks';
import { useSelector } from 'react-redux';

const FacebookNativeAd = () => {
  const { nativeId } = useFacebookAds();
  const { fbAds } = useSelector(({ UserReducer }) => UserReducer);
  console.log('FacebookNativeAd fbAds-> ', fbAds);

  const adsManager = new NativeAdsManager(nativeId, 3);

  return (
    nativeId && (
      <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
    )
  );
};

const NativeAdView = withNativeAd(props => {
  return (
    <View style={styles.container}>
      <AdIconView style={styles.AdIconView} />

      <View style={styles.content}>
        <TriggerableView style={styles.headline}>
          {props.nativeAd?.headline}
        </TriggerableView>

        <View style={RNStyles.flexRow}>
          <Text style={styles.sponsoredTranslation}>
            {props.nativeAd?.sponsoredTranslation}
          </Text>
          <AdChoicesView />
        </View>

        <TriggerableView style={styles.linkDescription}>
          {props.nativeAd?.linkDescription}
        </TriggerableView>
      </View>

      <View style={styles.button}>
        <TriggerableView style={styles.sponsoredTranslation}>
          {props.nativeAd?.callToActionText}
        </TriggerableView>
      </View>
    </View>
  );
});

const iconSize = wp(18);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    width: '100%',
  },
  AdIconView: {
    width: iconSize,
    height: iconSize,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  headline: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
  },
  sponsoredTranslation: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
  },
  linkDescription: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
  },
  button: {
    ...RNStyles.center,
    backgroundColor: Colors.Button,
    height: hp(5),
    width: wp(25),
    borderRadius: wp(2),
  },
});

export default FacebookNativeAd;
