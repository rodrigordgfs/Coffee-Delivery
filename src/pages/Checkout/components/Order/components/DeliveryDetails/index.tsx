import {
  DeliveryDetailsForm,
  DeliveryDetailsFormInput,
  DeliveryDetailsHeader,
  DeliveryDetailsHeaderContent,
  DeliveryDetailsWrapper,
} from "./styles";
import LocationYellow from "../../../../../../assets/icons/LocationYellow.svg";

export function DeliveryDetails() {
  return (
    <DeliveryDetailsWrapper>
      <DeliveryDetailsHeader>
        <img src={LocationYellow} />
        <DeliveryDetailsHeaderContent>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </DeliveryDetailsHeaderContent>
      </DeliveryDetailsHeader>
      <DeliveryDetailsForm>
        <DeliveryDetailsFormInput placeholder="CEP" />
        <DeliveryDetailsFormInput placeholder="Rua" />
        <DeliveryDetailsFormInput placeholder="Numero" />
        <DeliveryDetailsFormInput placeholder="Complemento" />
        <DeliveryDetailsFormInput placeholder="Bairro" />
        <DeliveryDetailsFormInput placeholder="Cidade" />
        <DeliveryDetailsFormInput placeholder="Estado" />
      </DeliveryDetailsForm>
    </DeliveryDetailsWrapper>
  );
}
