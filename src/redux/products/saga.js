import {all, put, takeEvery} from "redux-saga/effects";
import actions from "./actions";
import service from "../../service/service";

function* createProduct({ args }) {

    try {
        const data = yield service.createProduct(args);

    }catch (e) {
        console.log(e);
    }
}
function* getProducts({args}) {
    try {

        const data = yield service.getProducts(args? args : null);
        yield put({type: actions.GET_PRODUCTS_SUCCESS, ...data});

    }catch (e) {
        console.log()
    }
}
function* getProductById({ args }) {
    try {
        const data = yield  service.getProductById(args);
        yield put({type: actions.GET_PRODUCT_BY_ID_SUCCESS, ...data})

    }catch (e) {
        console.log(e);
    }
}


export default function* usersSaga() {
    yield all([
        takeEvery(actions.GET_PRODUCT_BY_ID_REQUEST, getProductById),
        takeEvery(actions.CREATE_PRODUCT_REQUEST, createProduct),
        takeEvery(actions.GET_PRODUCTS_REQUEST, getProducts)
    ]);
}
