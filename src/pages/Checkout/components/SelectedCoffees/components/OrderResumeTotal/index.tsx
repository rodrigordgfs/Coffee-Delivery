import { useContext } from "react";
import {
  OrderResumeTotalContainer,
  OrderResumeTotalItem,
  OrderResumeTotalValue,
} from "./styles";
import { OrderContext } from "../../../../../../context/Order";
import currencyBRL from "../../../../../../utils/currencyFormat";

export function OrderResumeTotal() {
  const { deliveryFee, totalAmmountProducts } = useContext(OrderContext);

  return (
    <OrderResumeTotalContainer>
      <OrderResumeTotalItem>
        <span>Total de itens</span>
        <span>{currencyBRL.format(totalAmmountProducts())}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalItem>
        <span>Entrega</span>
        <span>{currencyBRL.format(deliveryFee)}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalValue>
        <span>Total</span>
        <span>{currencyBRL.format(deliveryFee + totalAmmountProducts())}</span>
      </OrderResumeTotalValue>
    </OrderResumeTotalContainer>
  );
}
