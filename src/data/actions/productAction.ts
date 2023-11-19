import { GET_PRODUCT_LIST, SEARCH_PRODUCT } from '../../constant/actionConstant';

/**
 * 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
 * For redux action, we must have to return an object with `type` property.
 */

export const getProductList = () => {
  console.log(`${GET_PRODUCT_LIST} action is called`);
  return {
    type: GET_PRODUCT_LIST,
  };
};

export const searchProduct = (query: string) => {
  console.log(`${SEARCH_PRODUCT} action is called`);
  return {
    type: SEARCH_PRODUCT,
    query: query,
  };
};
