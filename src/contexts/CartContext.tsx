import { createContext, ReactNode, useReducer } from "react";
import { toast } from "react-toastify";
import {
  addProductAction,
  decrementProductAmountAction,
  incrementProductAmountAction,
  removeFromCartAction,
} from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CartProviderProps {
  children: ReactNode;
}

interface ProductAmount {
  id: string;
  amount: number;
}

interface CartContext {
  cartItemsAmount: number;
  productAmountList: ProductAmount[];
  onAddToCart: (id: string, amount: number) => void;
  onIncrementProductAmount: (id: string) => void;
  onDecrementProductAmount: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    productAmountList: [],
  });

  const { productAmountList } = cartState;

  function onAddToCart(id: string, amount: number) {
    dispatch(addProductAction(id, amount));

    toast("Item adicionado ao carrinho 🛒");
  }

  function onIncrementProductAmount(id: string) {
    dispatch(incrementProductAmountAction(id));
  }

  function onDecrementProductAmount(id: string) {
    dispatch(decrementProductAmountAction(id));
  }

  function onRemoveProduct(id: string) {
    dispatch(removeFromCartAction(id));

    toast("Item removido do carrinho 🛒");
  }

  const cartItemsAmount = productAmountList.length;

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        productAmountList,
        onAddToCart,
        onIncrementProductAmount,
        onDecrementProductAmount,
        onRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
