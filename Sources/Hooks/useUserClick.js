import { useDispatch, useSelector } from 'react-redux';
import { incrementCount as increase } from '../Redux/Actions';

const useUserClick = () => {
  const dispatch = useDispatch();
  const { innerPageClickCount: count } = useSelector(
    ({ UserReducer }) => UserReducer,
  );

  const incrementCount = () => {
    // if (count % adData?.innerPageAdClickCount === 0) {
    //   console.log({ count, inner: adData?.innerPageAdClickCount });
    //   interstitialAd.load();
    //   interstitialAd.loaded && interstitialAd.show();
    // }
    dispatch(increase(count + 1));
  };

  return { incrementCount };
};

export default useUserClick;
