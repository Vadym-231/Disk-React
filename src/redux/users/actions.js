const actions = {
  FETCH_DATA_REQUEST: 'FETCH_USERS_DATA_REQUEST',
  FETCH_DATA_SUCCESS: 'FETCH_USERS_DATA_SUCCESS',
  GET_PERFORMERS_REQUEST: 'GET_PERFORMERS_REQUEST',
  GET_PERFORMERS_SUCCESS: 'GET_PERFORMERS_SUCCESS',
  GET_PHOTOGRAPHERS_REQUEST: 'GET_PHOTOGRAPHERS_REQUEST',
  GET_PHOTOGRAPHERS_SUCCESS: 'GET_PHOTOGRAPHERS_SUCCESS',
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  USE_FILTER:'USE_FILTER',
  EDIT_USER_REQUEST : 'EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS : 'EDIT_USER_SUCCESS',
  REMOVE_USER_REQUEST : 'REMOVE_USER_REQUEST',
  REMOVE_USER_SUCCESS : 'REMOVE_USER_SUCCESS',
  CREATE_USER_LOADING: 'CREATE_USER_LOADING_START',


  removeUser : args=>({
    type: actions.REMOVE_USER_REQUEST,
    args
  }),
  editUser: args =>({
    type: actions.EDIT_USER_REQUEST,
    args
  }),
  useFilter: args =>({
    type: actions.USE_FILTER,
    args
  }),
  createUser: args => ({
    type: actions.CREATE_USER,
    args
  }),
  getUsers: args => ({
    type: actions.FETCH_DATA_REQUEST,
    args
  }),
  getPerformers: (args) => ({
    type: actions.GET_PERFORMERS_REQUEST,
    args
  }),
  getPhotographers: (args) => ({
    type: actions.GET_PHOTOGRAPHERS_REQUEST,
    args
  })
};

export default actions;
