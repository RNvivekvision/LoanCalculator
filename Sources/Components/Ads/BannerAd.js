import React from 'react';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

const BannerAds = () => {
  const { Admob } = useSelector(({ UserReducer }) => UserReducer);
  const unitId = __DEV__ ? TestIds.BANNER : Admob?.banner;

  return (
    unitId && (
      <BannerAd
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        unitId={unitId}
        onPaid={e => {
          // console.log('BannerAd onPaid -> ', e);
        }}
        onAdFailedToLoad={error => {
          console.log('Error BannerAd -> ', error);
        }}
      />
    )
  );
};

export default BannerAds;
