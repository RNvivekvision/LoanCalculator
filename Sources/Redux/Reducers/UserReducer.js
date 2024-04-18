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
  Admob: defaultAdsObj,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setLocalData: (s, a) => {
      s.appData = a.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getAdData.pending, (s, a) => {});
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.adData = a.payload;
      s.Admob = a.payload?.placement?.Admob ?? defaultAdsObj;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.adData = a.payload;
      // s = a.payload;
    });
  },
});

export const { setLocalData } = UserReducer.actions;
export default UserReducer.reducer;
