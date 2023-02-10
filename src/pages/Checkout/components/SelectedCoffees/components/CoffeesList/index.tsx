import {
  CoffeesListWrapper,
  ProductOrderItem,
  ProductOrderItemActions,
  ProductOrderItemContent,
  ProductOrderItemDivider,
  ProductOrderItemImage,
  ProductOrderItemPrice,
  ProductOrderItemQuantity,
  ProductOrderItemQuantityIcon,
  ProductOrderItemRemove,
  ProductOrderItemRemoveIcon,
  ProductOrderItemTitle,
} from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import ExpressoAmericano from "../../../../../../assets/Coffees/ExpressoAmericano.png";
import Capuccino from "../../../../../../assets/Coffees/Capuccino.png";

const SELECTED_COFFEES = [
  {
    id: "e9560626-5e88-4968-b107-1e1f1f2c8aca",
    name: "Expresso Americano",
    price: 9.9,
    quantity: 1,
    image: ExpressoAmericano,
  },
  {
    id: "b77f4b0d-a017-4035-b577-c83e64536b8a",
    name: "Capuccino",
    price: 9.9,
    quantity: 4,
    image: Capuccino,
  },
];

export function CoffeesList() {
  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <>
      {SELECTED_COFFEES.map((coffee) => {
        return (
          <CoffeesListWrapper key={coffee.id}>
            <ProductOrderItem>
              <ProductOrderItemImage src={coffee.image} />
              <ProductOrderItemContent>
                <ProductOrderItemTitle>{coffee.name}</ProductOrderItemTitle>
                <ProductOrderItemActions>
                  <ProductOrderItemQuantity>
                    <ProductOrderItemQuantityIcon>
                      <Minus width={14} />
                    </ProductOrderItemQuantityIcon>
                    <span>{coffee.quantity}</span>
                    <ProductOrderItemQuantityIcon>
                      <Plus width={14} />
                    </ProductOrderItemQuantityIcon>
                  </ProductOrderItemQuantity>
                  <ProductOrderItemRemove>
                    <ProductOrderItemRemoveIcon>
                      <Trash width={16} />
                    </ProductOrderItemRemoveIcon>
                    <span>Remover</span>
                  </ProductOrderItemRemove>
                </ProductOrderItemActions>
              </ProductOrderItemContent>
              <ProductOrderItemPrice>
                {formCurrency.format(coffee.price)}
              </ProductOrderItemPrice>
            </ProductOrderItem>
            <ProductOrderItemDivider />
          </CoffeesListWrapper>
        );
      })}
    </>
  );
}
