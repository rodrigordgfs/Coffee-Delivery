import {
  PaymentMehodsHeader,
  PaymentMehodsHeaderContent,
  PaymentMehodsItem,
  PaymentMehodsList,
  PaymentMehodsWrapper,
} from "./styles";
import Dollar from "../../../../../../assets/icons/Dollar.svg";
import { PAYMENT_METHODS } from "../../../../../../utils/paymentMethods";

export function PaymentMethods() {
  return (
    <PaymentMehodsWrapper>
      <PaymentMehodsHeader>
        <img src={Dollar} />
        <PaymentMehodsHeaderContent>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </PaymentMehodsHeaderContent>
      </PaymentMehodsHeader>
      <PaymentMehodsList>
        {PAYMENT_METHODS.map((paymentMethod) => {
          return (
            <PaymentMehodsItem key={paymentMethod.id}>
              <img src={paymentMethod.icon} />
              <span>{paymentMethod.name}</span>
            </PaymentMehodsItem>
          );
        })}
      </PaymentMehodsList>
    </PaymentMehodsWrapper>
  );
}
