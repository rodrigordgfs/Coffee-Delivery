import {
  HeaderActions,
  HeaderCart,
  HeaderContainer,
  HeaderLocation,
  HeaderWrapper,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import Location from "../../assets/icons/Location.svg";
import Cart from "../../assets/icons/Cart.svg";

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <HeaderWrapper>
          <img src={Logo} alt="Logo Coffee Delivery" />
          <HeaderActions>
            <HeaderLocation>
              <img src={Location} />
              <span>Porto Alegre, RS</span>
            </HeaderLocation>
            <HeaderCart>
              <img src={Cart} />
            </HeaderCart>
          </HeaderActions>
        </HeaderWrapper>
      </HeaderContainer>
    </header>
  );
}
