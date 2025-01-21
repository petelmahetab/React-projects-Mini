// import { createSlice } from '@reduxjs/toolkit';

// const slice = createSlice({
//   name: 'todo',
//   initialState: {
//     arr: [],
//   },
//   reducers: {
//     addReducer: (state, action) => state.arr.push(action.payload),
//   },
// });

// export const { addReducer } = slice.actions;
// export default slice.reducer; // Export the reducer as default

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todo',
  initialState: {
    arr: [], // Ensure the list is initialized as an empty array
  },
  reducers: {
    addReducer: (state, action) => {
      state.arr.push(action.payload); // Add new todo to the array
    },
  },
});

export const { addReducer } = slice.actions;
export default slice.reducer;
