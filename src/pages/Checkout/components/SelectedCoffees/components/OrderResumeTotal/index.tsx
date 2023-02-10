import {
  OrderResumeTotalContainer,
  OrderResumeTotalItem,
  OrderResumeTotalValue,
} from "./styles";

export function OrderResumeTotal() {
  const totalItems = 12.76;
  const deliveryFee = 5.6;
  const total = totalItems + deliveryFee;

  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <OrderResumeTotalContainer>
      <OrderResumeTotalItem>
        <span>Total de itens</span>
        <span>{formCurrency.format(totalItems)}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalItem>
        <span>Entrega</span>
        <span>{formCurrency.format(deliveryFee)}</span>
      </OrderResumeTotalItem>
      <OrderResumeTotalValue>
        <span>Total</span>
        <span>{formCurrency.format(total)}</span>
      </OrderResumeTotalValue>
    </OrderResumeTotalContainer>
  );
}
