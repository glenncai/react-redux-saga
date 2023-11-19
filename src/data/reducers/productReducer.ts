import { SET_PRODUCT_LIST } from '../../constant/actionConstant';
import { DataType } from '../actions/type';

export const productReducer = (data: DataType[] = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.data];
    default:
      return data;
  }
};
