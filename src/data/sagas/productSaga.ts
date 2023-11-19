import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_PRODUCT_LIST,
  SET_PRODUCT_LIST,
  SEARCH_PRODUCT,
} from '../../constant/actionConstant.ts';
import { DataType } from '../actions/type';

function* getProductList() {
  const result: DataType[] = yield fetch('http://localhost:3000/products').then(res => res.json());
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* searchProducts(data: any) {
  const result: DataType[] = yield fetch(`http://localhost:3000/products?q=${data.query}`).then(
    res => res.json()
  );
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProductList);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
