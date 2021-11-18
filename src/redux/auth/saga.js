import {all, put, takeEvery} from "redux-saga/effects";
import actions from "./actions";
import service from "../../service/service";

function* login({ args }) {
    try {
        const data = yield service.login(args);
        localStorage.setItem('token', data.data);
        yield put({type: actions.LOGIN_SUCCESS })

    }catch (e) {
        yield put({type: actions.LOGIN_SUCCESS, data: null })
    }
}

function* check({ args }) {
    try {
        const data = yield service.getMe();
        yield put({type: actions.CHECK_USER_SUCCESS, data: data.data});
    }catch (e) {
        yield put({type: actions.CHECK_USER_SUCCESS});
        console.log(e);
    }
}

export default function* authSaga() {
    yield all([
        takeEvery(actions.LOGIN_REQUEST, login),
        takeEvery(actions.CHECK_USER_REQUEST, check)
    ]);
}
