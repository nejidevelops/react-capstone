/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const fetchBikes = createAsyncThunk('fetchBikes', async () => {
  const response = await fetch('http://api.citybik.es/v2/networks/');
  return response.json();
});

const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bikes = action.payload;
      state.error = false;
    });
    builder.addCase(fetchBikes.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.error = true;
    });
  },
});

export default bikeSlice.reducer;
