import {
  CoffeesContainer,
  OurCoffeesContainer,
  OurCoffeesTitle,
  OurCoffeesWrapper,
} from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../../../context/Coffees";
import { OrderContext } from "../../../../context/Order";
import { CoffeeCards } from "./components/CoffeeCards";

export function OurCoffes() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <OurCoffeesContainer>
      <OurCoffeesWrapper>
        <OurCoffeesTitle>Nossos Cafés</OurCoffeesTitle>
        <CoffeesContainer>
          {coffees.map(({ id, image, tags, title, description, price }) => {
            return (
              <CoffeeCards
                key={id}
                id={id}
                image={image}
                tags={tags}
                title={title}
                description={description}
                price={price}
              />
            );
          })}
        </CoffeesContainer>
      </OurCoffeesWrapper>
    </OurCoffeesContainer>
  );
}
