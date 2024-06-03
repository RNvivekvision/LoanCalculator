import { useSelector } from 'react-redux';
import { GoogleBannerAd } from './google';
// import { AppLoveInBannerAd } from './appLoveIn';
// import { FacebookBannerAd } from './facebook';

const BannerAds = () => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const showAd = adData?.showAdInApp ?? false;

  if (showAd) {
    // return <AppLoveInBannerAd />;
    // return <FacebookBannerAd />;
    return <GoogleBannerAd />;
  }

  return null;
};

export default BannerAds;
