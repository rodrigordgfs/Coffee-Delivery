import { Order } from "./components/Order";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer, CheckoutWrapper } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <Order />
        <SelectedCoffees />
      </CheckoutWrapper>
    </CheckoutContainer>
  );
}
