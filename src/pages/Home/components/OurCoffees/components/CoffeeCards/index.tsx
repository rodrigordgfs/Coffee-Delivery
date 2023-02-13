import { Minus, Plus, ShoppingCart } from "phosphor-react";
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
} from "./styles";
import { formatBRL } from "../../../../../../utils/currencyFormat";
import { OrderContext } from "../../../../../../context/Order";
import { useContext, useEffect, useState } from "react";

interface ICoffeeCardProps {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function CoffeeCards({
  id,
  image,
  tags,
  title,
  description,
  price,
}: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(0);

  const { insertOrUpdateProduct } = useContext(OrderContext);

  function handleAddToCard(id: string) {
    if (quantity > 0) {
      insertOrUpdateProduct(id, quantity);
      setQuantity(0);
    }
  }

  return (
    <CoffeeCard>
      <img src={image} />
      <CoffeeCardTags>
        {tags.map((tag) => {
          return <CoffeeCardTagsItem key={tag}>{tag}</CoffeeCardTagsItem>;
        })}
      </CoffeeCardTags>
      <CoffeeCardTitle>{title}</CoffeeCardTitle>
      <CoffeeCardDescription>{description}</CoffeeCardDescription>
      <CoffeeCardActionsWrapper>
        <CoffeeCardPrice>
          <span>R$ </span>
          <span>{formatBRL.format(price)}</span>
        </CoffeeCardPrice>
        <CoffeeCardActions>
          <CoffeeCardQuantity>
            <CoffeeCardQuantityButton
              onClick={() => setQuantity((oldQuantity) => oldQuantity - 1)}
            >
              <Minus width={14} />
            </CoffeeCardQuantityButton>
            <span>{quantity}</span>
            <CoffeeCardQuantityButton
              onClick={() => setQuantity((oldQuantity) => oldQuantity + 1)}
            >
              <Plus width={14} />
            </CoffeeCardQuantityButton>
          </CoffeeCardQuantity>
          <CoffeeCardAddCart onClick={() => handleAddToCard(id)}>
            <ShoppingCart width={22} />
          </CoffeeCardAddCart>
        </CoffeeCardActions>
      </CoffeeCardActionsWrapper>
    </CoffeeCard>
  );
}
