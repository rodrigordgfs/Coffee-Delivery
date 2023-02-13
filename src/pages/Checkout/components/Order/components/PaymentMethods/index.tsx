import {
  PaymentMehodsHeader,
  PaymentMehodsHeaderContent,
  PaymentMehodsList,
  PaymentMehodsWrapper,
} from "./styles";
import Dollar from "../../../../../../assets/icons/Dollar.svg";
import { PAYMENT_METHODS } from "../../../../../../utils/paymentMethods";
import { PaymentMethodCard } from "./PaymentMethosCard";

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
        {PAYMENT_METHODS.map(({ id, name, icon }) => {
          return <PaymentMethodCard key={id} id={id} icon={icon} name={name} />;
        })}
      </PaymentMehodsList>
    </PaymentMehodsWrapper>
  );
}
