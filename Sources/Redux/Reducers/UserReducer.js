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
  Admob: defaultAdsObj,
  userClicks: 0,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setLocalData: (s, a) => {
      s.appData = a.payload;
    },
    increaseUserClicks: (s, a) => {
      s.userClicks = s.userClicks + a.payload;
    },
    decreaseUserClicks: (s, a) => {
      s.userClicks = s.userClicks - a.payload;
    },
    updateUserClicks: (s, a) => {
      s.userClicks = a.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getAdData.pending, s => {
      s.adDataLoading = true;
    });
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.adDataLoading = false;
      s.adData = a.payload;
      s.Admob = a.payload?.placement?.Admob ?? defaultAdsObj;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.adDataLoading = false;
      s.adData = a.payload;
      // s = a.payload;
    });
  },
});

export const {
  setLocalData,
  increaseUserClicks,
  decreaseUserClicks,
  updateUserClicks,
} = UserReducer.actions;
export default UserReducer.reducer;
