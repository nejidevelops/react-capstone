import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './bike';

const store = configureStore({
  reducer: {
    bike: bikeReducer,
  },
});

export default store;
