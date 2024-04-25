import { useCallback, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { DummyData } from '../Utils';

const KEY = DummyData.adKeys.appLovein;

const useAppLoveinAds = () => {
  const nativeAdRef = useRef();
  const { loveinAds, loveinAdsLoaded } = useSelector(
    ({ UserReducer }) => UserReducer,
  );

  const getKey = useCallback(key => KEY[Platform.OS][key], []);

  const bannerId = getKey('banner');
  const interstitialId = getKey('interstitial');
  const nativeId = getKey('native');
  const rewardId = getKey('reward');

  return {
    bannerId,
    interstitialId,
    nativeId,
    rewardId,
    nativeAdRef,
    loveinAdsLoaded,
  };
};

export default useAppLoveinAds;
