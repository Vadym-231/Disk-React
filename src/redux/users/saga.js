import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';
//import {success,error} from "../../Notification/setNotification";

function* getUsers({ args }) {
  try {
    const data = yield service.getUsers(args);
    yield put({ type: actions.FETCH_DATA_SUCCESS, ...data.data });
  }
  catch (err) {
    //yield error(err)
  }
}

function* getPerformers({ args }) {
  try {
    const data = yield service.getPerformers(args);
    yield put({ type: actions.GET_PERFORMERS_SUCCESS, ...data.data });
  }
  catch (err) {
    //yield error(err)
  }
}

function* getPhotographers({ args }) {
  try {
    const data = yield service.getPerformers(args);
    yield put({ type: actions.GET_PHOTOGRAPHERS_SUCCESS, ...data.data });
  }
  catch (err) {
   // yield error(err)
  }
}

function* createUser({ args }) {
  try {
    yield put({type: actions.CREATE_USER_LOADING, data: true});
    const data = yield service.createUser(args);
    yield put({type: actions.CREATE_USER_SUCCESS, ...data.data})
    //yield success(`User was created`)
  }
  catch (err) {
  //  yield error(err)
    yield put({type: actions.CREATE_USER_LOADING, data: false});
  }
}
function* useFilter({args}) {
  try {
    const data = yield service.useUserFilter(args);
    yield put({ type: actions.FETCH_DATA_SUCCESS, ...data.data });
  }catch (e) {
   // yield error(e)
  }
}
function* editUser({args}) {
  try {
    const data = yield service.editUser(args._id,args)
    yield put({ type: actions.EDIT_USER_SUCCESS, ...data.data });
  //  yield success('User was updated');
  }catch (e) {
   // yield error(e)
  }
}
function* removeUser ({args}){
  try {
    const data = yield service.deleteUser(args)
    yield put({type: actions.REMOVE_USER_SUCCESS, ...data.data});
    //yield success('User was deleted');
  }catch (e) {
   // yield error(e)
  }
}
export default function* usersSaga() {
  yield all([
    takeEvery(actions.REMOVE_USER_REQUEST,removeUser),
    takeEvery(actions.EDIT_USER_REQUEST,editUser),
    takeEvery(actions.FETCH_DATA_REQUEST, getUsers),
    takeEvery(actions.USE_FILTER,useFilter),
    takeEvery(actions.GET_PERFORMERS_REQUEST, getPerformers),
    takeEvery(actions.GET_PHOTOGRAPHERS_REQUEST, getPhotographers),
    takeEvery(actions.CREATE_USER, createUser)
  ]);
}
