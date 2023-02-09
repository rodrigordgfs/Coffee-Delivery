import { COFFEES } from "../../../../utils/coffees";
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
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function OurCoffes() {
  const [quantity, setQuantity] = useState(0);

  const formCurrency = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  function addCoffee() {
    setQuantity((oldQuantity) => oldQuantity + 1);
  }

  function removeCoffee() {
    if (quantity >= 1) {
      setQuantity((oldQuantity) => oldQuantity - 1);
    }
  }

  return (
    <OurCoffeesContainer>
      <OurCoffeesWrapper>
        <OurCoffeesTitle>Nossos Cafés</OurCoffeesTitle>
        <CoffeesContainer>
          {COFFEES.map((coffee) => {
            return (
              <CoffeeCard key={coffee.id}>
                <img src={coffee.image} />
                <CoffeeCardTags>
                  {coffee.tags.map((tag) => {
                    return (
                      <CoffeeCardTagsItem key={tag}>{tag}</CoffeeCardTagsItem>
                    );
                  })}
                </CoffeeCardTags>
                <CoffeeCardTitle>{coffee.title}</CoffeeCardTitle>
                <CoffeeCardDescription>
                  {coffee.description}
                </CoffeeCardDescription>
                <CoffeeCardActionsWrapper>
                  <CoffeeCardPrice>
                    <span>R$ </span>
                    <span>{formCurrency.format(coffee.price)}</span>
                  </CoffeeCardPrice>
                  <CoffeeCardActions>
                    <CoffeeCardQuantity>
                      <CoffeeCardQuantityButton onClick={removeCoffee}>
                        <Minus width={14} />
                      </CoffeeCardQuantityButton>
                      <span>{quantity}</span>
                      <CoffeeCardQuantityButton onClick={addCoffee}>
                        <Plus width={14} />
                      </CoffeeCardQuantityButton>
                    </CoffeeCardQuantity>
                    <CoffeeCardAddCart>
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
