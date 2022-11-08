import { MapPin, ShoppingCart } from "phosphor-react";
import logoSVG from "../../assets/logo.svg";
import { CartButton, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />

      <nav>
        <LocationContainer>
          <MapPin weight="fill" /> Umuarama, PR
        </LocationContainer>

        <CartButton to="/cart" title="carrinho de compras">
          <ShoppingCart weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
