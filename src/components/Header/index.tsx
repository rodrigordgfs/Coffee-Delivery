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
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()

  function handleGoToCheckout() {
    navigate('/checkout')
  }

  function handleGoToHome() {
    navigate('/')
  }

  return (
    <header>
      <HeaderContainer>
        <HeaderWrapper>
          <img src={Logo} alt="Logo Coffee Delivery" onClick={handleGoToHome} />
          <HeaderActions>
            <HeaderLocation>
              <img src={Location} />
              <span>Porto Alegre, RS</span>
            </HeaderLocation>
            <HeaderCart onClick={handleGoToCheckout}>
              <img src={Cart} />
            </HeaderCart>
          </HeaderActions>
        </HeaderWrapper>
      </HeaderContainer>
    </header>
  );
}
