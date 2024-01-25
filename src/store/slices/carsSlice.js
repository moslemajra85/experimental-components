import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearhTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      // action.payload shape: {name: string, cost: number}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      // action.payload is going to be the car'id
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
