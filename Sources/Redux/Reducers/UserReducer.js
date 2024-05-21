import { createSlice } from '@reduxjs/toolkit';
import { getAdData } from '../ExtraReducers';

const defaultAdsObj = {
  appOpen: '',
  banner: '',
  interstitial: '',
  nativeAdvanced: '',
  rewarded: '',
};

const initialState = {
  appData: null,
  adData: null,
  Admob: null,
  Admanager1: null,
  Admanager2: null,
  fbAds: null,
  loveinAds: null,
  loveinAdsLoaded: false,
  innerPageClickCount: 1,
  adLoading: false,
  clickAds: false,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setLocalData: (s, a) => {
      s.appData = a.payload;
    },
    setLoveinAdsLoaded: (s, a) => {
      s.loveinAdsLoaded = a.payload;
    },
    incrementCount: (s, a) => {
      s.innerPageClickCount = s.innerPageClickCount + 1;
      s.clickAds =
        s.innerPageClickCount % s.adData?.innerPageAdClickCount === 0;
      console.log('from reducer -> ', s.clickAds);
    },
    showAdLoader: (s, a) => {
      s.adLoading = a.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getAdData.pending, s => {
      s.adLoading = true;
    });
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.adLoading = false;
      s.adData = a.payload;
      s.Admob = a.payload?.placement?.Admob;
      s.Admanager1 = a.payload?.placement?.Admanager1;
      s.Admanager2 = a.payload?.placement?.Admanager2;
      s.fbAds = a.payload?.placement?.Facebook;
      s.loveinAds = a.payload?.placement?.AppLovin;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.adLoading = false;
      s.adData = a.payload;
      // s = a.payload;
    });
  },
});

export const {
  setLocalData,
  setLoveinAdsLoaded,
  incrementCount,
  showAdLoader,
} = UserReducer.actions;
export default UserReducer.reducer;
