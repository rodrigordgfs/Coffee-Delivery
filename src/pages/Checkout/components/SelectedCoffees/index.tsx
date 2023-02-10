import { useNavigate } from "react-router-dom";
import { CoffeesList } from "./components/CoffeesList";
import { OrderResumeTotal } from "./components/OrderResumeTotal";
import {
  OrderResumeConfirmButton,
  OrderResumeContainer,
  ProductsEmpty,
  ProductsEmptyImage,
  ProductsEmptyLink,
  ProductsEmptySubtitle,
  ProductsEmptyTitle,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
} from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../../../context/Order";
import EmptyCart from "../../../../assets/EmptyCart.svg";

export function SelectedCoffees() {
  const navigate = useNavigate();

  const { isProductsEmpty } = useContext(OrderContext);

  function handleConfirmOrder() {
    navigate("/success");
  }

  function handleGoToHome() {
    navigate("/");
  }

  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>Selected Coffees</SelectedCoffeesTitle>

      <OrderResumeContainer>
        {isProductsEmpty() ? (
          <ProductsEmpty>
            <ProductsEmptyTitle>Seu carrinho está vazio</ProductsEmptyTitle>
            <ProductsEmptySubtitle>
              Adicione um café para continuar
            </ProductsEmptySubtitle>
            <ProductsEmptyLink onClick={handleGoToHome}>
              Ir para tela inicial
            </ProductsEmptyLink>
            <ProductsEmptyImage src={EmptyCart} />
          </ProductsEmpty>
        ) : (
          <>
            <CoffeesList />
            <OrderResumeTotal />
            <OrderResumeConfirmButton onClick={handleConfirmOrder}>
              Confirmar Pedido
            </OrderResumeConfirmButton>
          </>
        )}
      </OrderResumeContainer>
    </SelectedCoffeesContainer>
  );
}
