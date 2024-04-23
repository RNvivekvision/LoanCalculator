import { BannerView } from 'react-native-fbads';
import { useFacebookAds } from '../../../Hooks';
import { useSelector } from 'react-redux';

const FacebookBannerAd = () => {
  const { bannerId } = useFacebookAds();
  const { fbAds } = useSelector(({ UserReducer }) => UserReducer);

  return (
    bannerId && (
      <BannerView
        placementId={bannerId}
        type="standard"
        onPress={() => console.log('Click Banner')}
        onError={e => console.error('Error Banner -> ', e.nativeEvent)}
      />
    )
  );
};

export default FacebookBannerAd;
