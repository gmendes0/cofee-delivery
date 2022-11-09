import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoSVG from "../../assets/logo.svg";
import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  ShoppingCartItemsAmount,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" title="inicio">
        <img src={logoSVG} alt="" />
      </Link>

      <nav>
        <LocationContainer>
          <MapPin weight="fill" /> Umuarama, PR
        </LocationContainer>

        <CartButton to="/cart" title="carrinho de compras">
          <ShoppingCart weight="fill" />
          <ShoppingCartItemsAmount>3</ShoppingCartItemsAmount>
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
