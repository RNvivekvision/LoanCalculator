import { AdFormat, AdView } from 'react-native-applovin-max';
import { useAppLoveinAds } from '../../../Hooks';

const AppLoveInBannerAd = () => {
  const { bannerId, loveinAdsLoaded } = useAppLoveinAds();

  return (
    loveinAdsLoaded && (
      <AdView
        adUnitId={bannerId}
        adFormat={AdFormat.BANNER}
        onAdLoadFailed={e => {
          console.log('AppLoveInBannerAd onAdLoadFailed -> ', e);
        }}
      />
    )
  );
};

export default AppLoveInBannerAd;
