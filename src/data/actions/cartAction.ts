import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../../constant/actionConstant';
import { DataType } from './type';

/**
 * 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
 * For redux action, we must have to return an object with `type` property.
 */

/**
 * Add to cart action
 *
 * @param data CartDataType
 */
export const addToCart = (data: DataType) => {
  console.log(`${ADD_TO_CART} action is called`, data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

/**
 * Remove from cart action
 *
 * @param data CartDataType
 */
export const removeFromCart = (data: DataType) => {
  console.log(`${REMOVE_FROM_CART} action is called`, data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

/**
 * Empty cart action
 */
export const emptyCart = () => {
  console.log(`${EMPTY_CART} action is called`);
  return {
    type: EMPTY_CART,
  };
};
