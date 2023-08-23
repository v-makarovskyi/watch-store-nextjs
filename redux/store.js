import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { watchsApi } from "./watchsApi";
import sortReducer from './sortSlice'
/* import productsReducer from "./products/productReducer";
import categoriesReducer from "./categories/categoriesReduser";
import brandsReducer from "./brands/brandsSlice"; */


export const makeStore = () => 
  configureStore({
    reducer: {
      [watchsApi.reducerPath]: watchsApi.reducer,
      sort: sortReducer,
    },
    middleware: (gDM) => gDM().concat(watchsApi.middleware)
  })

export const wrapper = createWrapper(makeStore, {debug:true})




/* const allReducers = {
  products: productsReducer,
  categories: categoriesReducer,
  brands: brandsReducer,
}

const combinedReducer = combineReducers(allReducers);

const reducer = (state, action) => {
  if (action.type === 'HYDRATE') {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => {
  return configureStore({
    reducer,
  });
};

export const wrapper = createWrapper(makeStore); */
