import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appData: null,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setLocalData: (s, a) => {
      s.appData = a.payload;
    },
  },
});

export const { setLocalData } = UserReducer.actions;
export default UserReducer.reducer;
