import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer, // store needs to know reducer for the data flow
});

//dispatch means value bhejna hai
//selector mtlb value lena hai
// map lga kr value bhejna hai to value ki id lgegi hi useDispatch use krne wkt
