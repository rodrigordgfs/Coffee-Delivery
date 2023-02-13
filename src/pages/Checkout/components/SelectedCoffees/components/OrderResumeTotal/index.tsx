import { useContext } from "react";
import {
  OrderResumeTotalContainer,
  OrderResumeTotalItem,
  OrderResumeTotalValue,
} from "./styles";
import { OrderContext } from "../../../../../../context/Order";
import { formatCurrencyBRL } from "../../../../../../utils/currencyFormat";

export function OrderResumeTotal() {
  const { deliveryFee, totalAmmountProducts } = useContext(OrderContext);

  return (
    <OrderResumeTotalContainer>
      <OrderResumeTotalItem>
        <span>Total de itens</span>
        <span>{formatCurrencyBRL.format(totalAmmountProducts())}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalItem>
        <span>Entrega</span>
        <span>{formatCurrencyBRL.format(deliveryFee)}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalValue>
        <span>Total</span>
        <span>
          {formatCurrencyBRL.format(deliveryFee + totalAmmountProducts())}
        </span>
      </OrderResumeTotalValue>
    </OrderResumeTotalContainer>
  );
}
