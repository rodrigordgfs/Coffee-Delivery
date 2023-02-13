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
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/Order";
import { formatCurrencyBRL } from "../../../../../../utils/currencyFormat";

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
  const {
    selectedProductsList,
    increaseProduct,
    decreaseProduct,
    removeProduct,
  } = useContext(OrderContext);

  const products = selectedProductsList();

  return (
    <>
      {products.map((coffee) => {
        return (
          <CoffeesListWrapper key={coffee.coffeeID}>
            <ProductOrderItem>
              <ProductOrderItemImage src={coffee.image} />
              <ProductOrderItemContent>
                <ProductOrderItemTitle>{coffee.title}</ProductOrderItemTitle>
                <ProductOrderItemActions>
                  <ProductOrderItemQuantity>
                    <ProductOrderItemQuantityIcon
                      onClick={() => decreaseProduct(coffee.coffeeID)}
                    >
                      <Minus width={14} />
                    </ProductOrderItemQuantityIcon>
                    <span>{coffee.quantity}</span>
                    <ProductOrderItemQuantityIcon
                      onClick={() => increaseProduct(coffee.coffeeID)}
                    >
                      <Plus width={14} />
                    </ProductOrderItemQuantityIcon>
                  </ProductOrderItemQuantity>
                  <ProductOrderItemRemove
                    onClick={() => removeProduct(coffee.coffeeID)}
                  >
                    <ProductOrderItemRemoveIcon>
                      <Trash width={16} />
                    </ProductOrderItemRemoveIcon>
                    <span>Remover</span>
                  </ProductOrderItemRemove>
                </ProductOrderItemActions>
              </ProductOrderItemContent>
              <ProductOrderItemPrice>
                {formatCurrencyBRL.format(Number(coffee.price))}
              </ProductOrderItemPrice>
            </ProductOrderItem>
            <ProductOrderItemDivider />
          </CoffeesListWrapper>
        );
      })}
    </>
  );
}
