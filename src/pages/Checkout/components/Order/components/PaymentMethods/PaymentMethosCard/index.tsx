import { useContext } from "react";
import { PaymentMehodsItem, PaymentMehodsItemSelected } from "./styles";
import { OrderContext } from "../../../../../../../context/Order";

interface IPaymentMethodCardProps {
  id: string;
  icon: string;
  name: string;
}

export function PaymentMethodCard({ id, icon, name }: IPaymentMethodCardProps) {
  const { selectPaymentMethod, payment } = useContext(OrderContext);

  function isPaymentMethodSelected() {
    return payment.id === id;
  }

  return (
    <>
      {isPaymentMethodSelected() ? (
        <PaymentMehodsItemSelected
          key={id}
          onClick={() => selectPaymentMethod(id)}
        >
          <img src={icon} />
          <span>{name}</span>
        </PaymentMehodsItemSelected>
      ) : (
        <PaymentMehodsItem key={id} onClick={() => selectPaymentMethod(id)}>
          <img src={icon} />
          <span>{name}</span>
        </PaymentMehodsItem>
      )}
    </>
  );
}
