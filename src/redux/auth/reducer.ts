import actions from './actions';
import {IAction} from "../../types/inext";

const initialState = {
    data: {},
    firstLoad: true,
    isSuccessAuth: false
};

export default function auth(state = initialState, action: IAction) {
    const { type, data } = action;
    switch (type) {
        case actions.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                data: {},
                isSuccessAuth: false
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isSuccessAuth: true
            }
        case actions.CHECK_USER_SUCCESS:
            return {
                ...state,
                data: data,
                firstLoad: false
            }
        default:
            return state;
    }
}
