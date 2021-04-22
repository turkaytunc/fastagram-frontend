/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userToolkit = createSlice({
  name: 'user',
  initialState: {
    user: { name: '', id: '' },
  },
  reducers: {
    add: (state, action) => {
      state.user = action.payload;
    },
    remove: (state, action) => {
      state.user = { id: '', name: '' };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = userToolkit.actions;

export default userToolkit.reducer;
