import { configureStore } from '@reduxjs/toolkit';
import { addCar, removeCar, changeSearchTerm } from './slices/carsSlice';
import { changeName, changeCost } from './slices/carFormSlice';
import { carReducer } from './slices/carsSlice';
import { carFormReducer } from './slices/carFormSlice';

export const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    cars: carReducer,
  },
});

export { addCar, removeCar, changeSearchTerm, changeCost, changeName };
