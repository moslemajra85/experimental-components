import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const carFormSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },

    changeCost(state, action) {
      state.cost = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

// extract action creators generated automatically by redux toolkits
export const { changeName, changeCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
