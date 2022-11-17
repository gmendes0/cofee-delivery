import { createContext, ReactNode, useReducer } from "react";
import { toast } from "react-toastify";
import {
  addProductAction,
  clearCartAction,
  decrementProductAmountAction,
  incrementProductAmountAction,
  removeFromCartAction,
} from "../reducers/cart/actions";
import { cartReducer, ProductAmount } from "../reducers/cart/reducer";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContext {
  cartItemsAmount: number;
  productAmountList: ProductAmount[];
  onAddToCart: (id: string, amount: number, price_id: string) => void;
  onIncrementProductAmount: (id: string) => void;
  onDecrementProductAmount: (id: string) => void;
  onRemoveProduct: (id: string) => void;
  onClearCart: () => void;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    productAmountList: [],
  });

  const { productAmountList } = cartState;

  function onAddToCart(id: string, amount: number, price_id: string) {
    dispatch(addProductAction(id, amount, price_id));

    toast("Item adicionado ao carrinho 🛒", { position: "top-left" });
  }

  function onIncrementProductAmount(id: string) {
    dispatch(incrementProductAmountAction(id));
  }

  function onDecrementProductAmount(id: string) {
    dispatch(decrementProductAmountAction(id));
  }

  function onRemoveProduct(id: string) {
    dispatch(removeFromCartAction(id));

    toast("Item removido do carrinho 🛒", { position: "top-left" });
  }

  function onClearCart() {
    dispatch(clearCartAction());
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
        onClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
