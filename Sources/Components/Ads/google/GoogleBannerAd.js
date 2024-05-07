import { useState } from 'react';
import { View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

const GoogleBannerAds = ({ style }) => {
  const { Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const [State, setState] = useState({ unitId: Admob?.banner, index: 0 });
  const unitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : State.unitId;

  const onAdFailedToLoad = e => {
    console.log('Error BannerAd -> ', e);
    const newIndex = State.index + 1;
    if (newIndex == 1) {
      setState(p => ({ ...p, unitId: Admanager1?.banner, index: newIndex }));
    } else if (newIndex == 2) {
      setState(p => ({ ...p, unitId: Admanager2?.banner, index: newIndex }));
    }
  };

  return (
    <View style={style}>
      {unitId && (
        <BannerAd
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          unitId={unitId}
          onPaid={e => {
            console.log('BannerAd onPaid -> ', e);
          }}
          onAdFailedToLoad={onAdFailedToLoad}
        />
      )}
    </View>
  );
};

export default GoogleBannerAds;
