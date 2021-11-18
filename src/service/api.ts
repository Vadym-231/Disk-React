import axios, { Axios} from 'axios';
const  apiUrl  = 'http://localhost:2000'//config;


type method = 'get' | 'post' | 'put' | 'patch'

export default class Api {
  private axios : Axios;
  constructor({
    baseUrl = apiUrl,
    extraHeaders = {},
    returnError = false
  } = {}) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      authorization: `${localStorage.getItem('token')}`,
      ...extraHeaders
    };

    //headers.authorization = `${localStorage.getItem('token')}`;

    this.axios = axios.create({
      baseURL: `${baseUrl}/`,
      headers
    });

    this.axios.interceptors.response.use(
        function(response) {
          return Promise.resolve(response);
        },
        function(error) {
          const {data, status } = error.response
          const errorsDetails = `${data.errors.map((item: { title: string; })=>item.title).join(',')}`;
          if (error.response) {
            return Promise.reject(new Error(errorsDetails));
          }
        }
      );
  }

  query(method : method, url : string, data = {}) {
    return this.axios[method](url, data);
  }
}
