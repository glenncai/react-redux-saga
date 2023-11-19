import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../../constant/actionConstant.ts';
import { DataType } from '../actions/type';

export const cartReducer = (data: DataType[] = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...data, action.data];
    case REMOVE_FROM_CART:
      return data.filter(item => item.id !== action.data.id);
    case EMPTY_CART:
      return [];
    default:
      return data;
  }
};
