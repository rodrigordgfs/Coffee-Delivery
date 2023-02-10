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
  const { address, fillAddress } = useContext(OrderContext);

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
          value={address.CEP}
          onChange={(e) => fillAddress({ CEP: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Rua"
          value={address.rua}
          onChange={(e) => fillAddress({ rua: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Numero"
          value={address.numero}
          onChange={(e) => fillAddress({ numero: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Complemento"
          value={address.complemento}
          onChange={(e) => fillAddress({ complemento: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Bairro"
          value={address.bairro}
          onChange={(e) => fillAddress({ bairro: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Cidade"
          value={address.cidade}
          onChange={(e) => fillAddress({ cidade: e.target.value })}
        />
        <DeliveryDetailsFormInput
          placeholder="Estado"
          value={address.estado}
          onChange={(e) => fillAddress({ estado: e.target.value })}
        />
      </DeliveryDetailsForm>
    </DeliveryDetailsWrapper>
  );
}
