import { DeliveryDetails } from "./components/DeliveryDetails";
import { PaymentMethods } from "./components/PaymentMethods";
import { OrderContainer, OrderTitle } from "./styles";

export function Order() {
  return (
    <OrderContainer>
      <OrderTitle>Complete seu pedido</OrderTitle>
      <DeliveryDetails />
      <PaymentMethods />
    </OrderContainer>
  );
}
