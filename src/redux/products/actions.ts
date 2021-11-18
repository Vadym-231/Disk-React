import {IQuery, IViewProduct} from "../../types/inext";

const actions = {
  GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',

  SET_PRODUCTS: 'SET_PRODUCTS',

  GET_PRODUCT_BY_ID_REQUEST: 'GET_PRODUCT_BY_ID_REQUEST',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',

  DELETE_PRODUCT_REQUEST:'DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',

  CREATE_PRODUCT_REQUEST: 'CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS:'CREATE_PRODUCT_SUCCESS',

  getProductById: (args : string) => ({
    type: actions.GET_PRODUCT_BY_ID_REQUEST,
    args
  }),
  getProducts: (args: IQuery) => ({
    type: actions.GET_PRODUCTS_REQUEST,
    args
  }),
  createProduct: (args: IViewProduct)=> ({
    type: actions.CREATE_PRODUCT_REQUEST,
    args
  }),
  setProducts:  (data: IViewProduct)=> ({
    type: actions.SET_PRODUCTS,
    data
  })

}

export default actions
