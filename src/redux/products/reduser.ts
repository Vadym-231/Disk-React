import actions from './actions';
import {IAction} from "../../types/inext";

const initialState = {
  products: [],
  newProduct: {
    images: []
  },
  data: {},
  productsFirstLoad: true,
  error: null
};

export default function products(state = initialState, action: IAction) {
  const { type, data } = action;
  switch (type) {
    case actions.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        data: data
      }
    case actions.SET_PRODUCTS:
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          ...data
        }
      }
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: data,
        productsFirstLoad: false
      }
    default:
      return state;
  }
}
