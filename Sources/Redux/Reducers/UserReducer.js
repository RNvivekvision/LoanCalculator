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
  adDataLoading: false,
  Admob: null,
  Admanager1: null,
  Admanager2: null,
  fbAds: null,
  loveinAds: null,
  loveinAdsLoaded: false,
  innerPageClickCount: 0,
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
    },
  },
  extraReducers: b => {
    b.addCase(getAdData.pending, s => {
      s.adDataLoading = true;
    });
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.adDataLoading = false;
      s.adData = a.payload;
      s.Admob = a.payload?.placement?.Admob;
      s.Admanager1 = a.payload?.placement?.Admanager1;
      s.Admanager2 = a.payload?.placement?.Admanager2;
      s.fbAds = a.payload?.placement?.Facebook;
      s.loveinAds = a.payload?.placement?.AppLovin;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.adDataLoading = false;
      s.adData = a.payload;
      // s = a.payload;
    });
  },
});

export const { setLocalData, setLoveinAdsLoaded, incrementCount } =
  UserReducer.actions;
export default UserReducer.reducer;
