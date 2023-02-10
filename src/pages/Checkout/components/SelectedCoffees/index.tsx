import { useNavigate } from "react-router-dom";
import { CoffeesList } from "./components/CoffeesList";
import { OrderResumeTotal } from "./components/OrderResumeTotal";
import {
  OrderResumeConfirmButton,
  OrderResumeContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
} from "./styles";

export function SelectedCoffees() {
  const navigate = useNavigate();

  function handleConfirmOrder() {
    navigate("/success");
  }

  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>Selected Coffees</SelectedCoffeesTitle>
      <OrderResumeContainer>
        <CoffeesList />
        <OrderResumeTotal />
        <OrderResumeConfirmButton onClick={handleConfirmOrder}>
          Confirmar Pedido
        </OrderResumeConfirmButton>
      </OrderResumeContainer>
    </SelectedCoffeesContainer>
  );
}
