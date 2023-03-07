import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterValue: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
