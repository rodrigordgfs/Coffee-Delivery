import {
  DeliveryDetailsForm,
  DeliveryDetailsFormInput,
  DeliveryDetailsHeader,
  DeliveryDetailsHeaderContent,
  DeliveryDetailsWrapper,
} from "./styles";
import LocationYellow from "../../../../../../assets/icons/LocationYellow.svg";
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/Order";

export function DeliveryDetails() {
  const { fillAddress } = useContext(OrderContext);

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
        <DeliveryDetailsFormInput
          placeholder="CEP"
          onChange={(e) => fillAddress({ CEP: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Rua"
          onChange={(e) => fillAddress({ rua: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Numero"
          onChange={(e) => fillAddress({ numero: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Complemento"
          onChange={(e) => fillAddress({ complemento: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Bairro"
          onChange={(e) => fillAddress({ bairro: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Cidade"
          onChange={(e) => fillAddress({ cidade: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Estado"
          onChange={(e) => fillAddress({ estado: e.target.value })}
        />
      </DeliveryDetailsForm>
    </DeliveryDetailsWrapper>
  );
}
