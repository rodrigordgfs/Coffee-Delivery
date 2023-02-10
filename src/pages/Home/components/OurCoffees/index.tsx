import {
  CoffeeCard,
  CoffeeCardActions,
  CoffeeCardActionsWrapper,
  CoffeeCardAddCart,
  CoffeeCardDescription,
  CoffeeCardPrice,
  CoffeeCardQuantity,
  CoffeeCardQuantityButton,
  CoffeeCardTags,
  CoffeeCardTagsItem,
  CoffeeCardTitle,
  CoffeesContainer,
  OurCoffeesContainer,
  OurCoffeesTitle,
  OurCoffeesWrapper,
} from "./styles";
import { useContext } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeesContext } from "../../../../context/Coffees";
import { OrderContext } from "../../../../context/Order";

export function OurCoffes() {
  const { coffees } = useContext(CoffeesContext);
  const { increaseProduct, decreaseProduct, quantityOfProduct } =
    useContext(OrderContext);

  const formCurrency = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  function handleGoToCheckout(coffeID: string) {}

  return (
    <OurCoffeesContainer>
      <OurCoffeesWrapper>
        <OurCoffeesTitle>Nossos Cafés</OurCoffeesTitle>
        <CoffeesContainer>
          {coffees.map(({ id, image, tags, title, description, price }) => {
            return (
              <CoffeeCard key={id}>
                <img src={image} />
                <CoffeeCardTags>
                  {tags.map((tag) => {
                    return (
                      <CoffeeCardTagsItem key={tag}>{tag}</CoffeeCardTagsItem>
                    );
                  })}
                </CoffeeCardTags>
                <CoffeeCardTitle>{title}</CoffeeCardTitle>
                <CoffeeCardDescription>{description}</CoffeeCardDescription>
                <CoffeeCardActionsWrapper>
                  <CoffeeCardPrice>
                    <span>R$ </span>
                    <span>{formCurrency.format(price)}</span>
                  </CoffeeCardPrice>
                  <CoffeeCardActions>
                    <CoffeeCardQuantity>
                      <CoffeeCardQuantityButton
                        onClick={() => decreaseProduct(id)}
                      >
                        <Minus width={14} />
                      </CoffeeCardQuantityButton>
                      <span>{quantityOfProduct(id)}</span>
                      <CoffeeCardQuantityButton
                        onClick={() => increaseProduct(id)}
                      >
                        <Plus width={14} />
                      </CoffeeCardQuantityButton>
                    </CoffeeCardQuantity>
                    <CoffeeCardAddCart onClick={() => handleGoToCheckout(id)}>
                      <ShoppingCart width={22} />
                    </CoffeeCardAddCart>
                  </CoffeeCardActions>
                </CoffeeCardActionsWrapper>
              </CoffeeCard>
            );
          })}
        </CoffeesContainer>
      </OurCoffeesWrapper>
    </OurCoffeesContainer>
  );
}
