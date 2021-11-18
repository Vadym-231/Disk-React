import Api from './api';
import {IQuery, IViewProduct} from "../types/inext";

export default {
  getProducts: (data? : IQuery | null) => {
    const api = new Api();
    return api.query('get',`/products`, {
      query: data
    });
  },
  createProduct: (data: IViewProduct) => {
    const api = new Api();
    return api.query('post', '/products', data);
  },
  getProductById: (id : string) => {
    const api = new Api()
    return api.query('get', `/products/${id}`)
  },
  login: (data: { email: string, password: string}) => {
    const api = new Api();
    return api.query('post', '/auth', data);
  },
  getMe: () => {
    const api = new Api();
    return api.query('get', '/auth');
  }
};

