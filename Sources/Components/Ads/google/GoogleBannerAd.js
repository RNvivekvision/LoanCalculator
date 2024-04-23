import { View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

const GoogleBannerAds = ({ large, style }) => {
  const { Admob } = useSelector(({ UserReducer }) => UserReducer);
  const unitId = __DEV__ ? TestIds.BANNER : Admob?.banner;

  return (
    <View style={style}>
      {unitId && (
        <BannerAd
          size={
            large
              ? BannerAdSize.LARGE_BANNER
              : BannerAdSize.ANCHORED_ADAPTIVE_BANNER
          }
          unitId={unitId}
          onPaid={e => {
            console.log('BannerAd onPaid -> ', e);
          }}
          onAdFailedToLoad={error => {
            console.log('Error BannerAd -> ', error);
          }}
        />
      )}
    </View>
  );
};

export default GoogleBannerAds;
