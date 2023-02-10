import { CoffeesList } from "./components/CoffeesList";
import { OrderResumeTotal } from "./components/OrderResumeTotal";
import {
  OrderResumeConfirmButton,
  OrderResumeContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
} from "./styles";

export function SelectedCoffees() {
  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>Selected Coffees</SelectedCoffeesTitle>
      <OrderResumeContainer>
        <CoffeesList />
        <OrderResumeTotal />
        <OrderResumeConfirmButton>Confirmar Pedido</OrderResumeConfirmButton>
      </OrderResumeContainer>
    </SelectedCoffeesContainer>
  );
}
