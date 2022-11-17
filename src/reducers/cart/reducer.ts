import { Action, ActionTypes } from "./actions";

export interface ProductAmount {
  id: string;
  price_id: string;
  amount: number;
}

export interface CartState {
  productAmountList: ProductAmount[];
}

export function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      if (
        state.productAmountList
          .map((productAmount) => productAmount.id)
          .includes(action.payload.id)
      )
        return {
          ...state,
          productAmountList: state.productAmountList.map((productAmount) => {
            if (productAmount.id === action.payload.id)
              return {
                ...productAmount,
                amount:
                  productAmount.amount + action.payload.amount <= 99
                    ? productAmount.amount + action.payload.amount
                    : 99,
              };

            return productAmount;
          }),
        };

      return {
        ...state,
        productAmountList: [...state.productAmountList, action.payload],
      };
    case ActionTypes.INCREMENT_PRODUCT_AMOUNT:
      return {
        ...state,
        productAmountList: state.productAmountList.map((productAmount) => {
          if (productAmount.id === action.payload.id)
            return {
              ...productAmount,
              amount:
                productAmount.amount < 99
                  ? productAmount.amount + 1
                  : productAmount.amount,
            };

          return productAmount;
        }),
      };
    case ActionTypes.DECREMENT_PRODUCT_AMOUNT:
      return {
        ...state,
        productAmountList: state.productAmountList.map((productAmount) => {
          if (productAmount.id === action.payload.id)
            return {
              ...productAmount,
              amount:
                productAmount.amount > 1
                  ? productAmount.amount - 1
                  : productAmount.amount,
            };

          return productAmount;
        }),
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        productAmountList: state.productAmountList.filter(
          (productAmount) => productAmount.id !== action.payload.id
        ),
      };
    case ActionTypes.CLEAR_CART:
      return {
        productAmountList: [],
      };
    default:
      return state;
  }
}
