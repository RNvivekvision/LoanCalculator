import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasUser: false,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setUser: (s, a) => {
      s.hasUser = a.payload;
    },
  },
});

export const { setUser } = UserReducer.actions;
export default UserReducer.reducer;
