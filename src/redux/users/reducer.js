import actions from './actions';

const initialState = {
  firstLoad: true,
  userCreateLoading: false,
  users: [],
  roles: [],
  performers: [],
  photographers: [],
};

export default function users(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.CREATE_USER_LOADING:
      return {
        ...state,
        userCreateLoading: data
      }
    case actions.EDIT_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map(item=>item._id !== data._id ? item : data)
      }
    case actions.REMOVE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(item=>item._id !== data._id)
      }
    case actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        userCreateLoading: false,
        users: state.users.concat([data])
      };
  case actions.GET_PERFORMERS_SUCCESS:
    return {
      ...state,
      performers: data
    };

  case actions.FETCH_DATA_SUCCESS:
    return {
      ...state,
      firstLoad: false,
      users: data.users,
      roles: data.roles
    };

  case actions.GET_PHOTOGRAPHERS_SUCCESS:
    return {
      ...state,
      photographers: data
    };

  default:
    return state;
  }
}
