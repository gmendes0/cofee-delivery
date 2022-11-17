export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  INCREMENT_PRODUCT_AMOUNT = "INCREMENT_PRODUCT_AMOUNT",
  DECREMENT_PRODUCT_AMOUNT = "DECREMENT_PRODUCT_AMOUNT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export const addProductAction = (
  id: string,
  amount: number,
  price_id: string
): Action => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: { id, amount, price_id },
});

export const incrementProductAmountAction = (id: string): Action => ({
  type: ActionTypes.INCREMENT_PRODUCT_AMOUNT,
  payload: {
    id,
  },
});

export const decrementProductAmountAction = (id: string): Action => ({
  type: ActionTypes.DECREMENT_PRODUCT_AMOUNT,
  payload: {
    id,
  },
});

export const removeFromCartAction = (id: string): Action => ({
  type: ActionTypes.REMOVE_PRODUCT,
  payload: { id },
});

export const clearCartAction = (): Action => ({
  type: ActionTypes.CLEAR_CART,
});
