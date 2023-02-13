import {
  OrderDetails,
  OrderDetailsImage,
  OrderDetailsList,
  OrderDetailsListItem,
  OrderDetailsListItemInfo,
  OrderDetailsSubtitle,
  OrderDetailsTitle,
  SuccessContainer,
  SuccessWrapper,
} from "./styles";
import Deliver from "../../assets/deliver.svg";
import LocationPurple from "../../assets/icons/LocationPurple.svg";
import StopwatchYellow from "../../assets/icons/StopwatchYellow.svg";
import DollarYellowDark from "../../assets/icons/DollarYellowDark.svg";
import { useContext } from "react";
import { OrderContext } from "../../context/Order";

export function Success() {
  const { payment, address } = useContext(OrderContext);

  return (
    <SuccessContainer>
      <SuccessWrapper>
        <OrderDetails>
          <OrderDetailsTitle>Uhu! pedido confirmado</OrderDetailsTitle>
          <OrderDetailsSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </OrderDetailsSubtitle>
          <OrderDetailsList>
            <OrderDetailsListItem>
              <img src={LocationPurple} />
              <OrderDetailsListItemInfo>
                <p>
                  Entrega em{" "}
                  <span>
                    Rua {address.rua}, {address.numero}
                  </span>
                </p>
                <span>
                  {address.bairro} - {address.cidade}, {address.estado}
                </span>
              </OrderDetailsListItemInfo>
            </OrderDetailsListItem>
            <OrderDetailsListItem>
              <img src={StopwatchYellow} />
              <OrderDetailsListItemInfo>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min </span>
              </OrderDetailsListItemInfo>
            </OrderDetailsListItem>
            <OrderDetailsListItem>
              <img src={DollarYellowDark} />
              <OrderDetailsListItemInfo>
                <p>Pagamento na entrega</p>
                <span>{payment.name}</span>
              </OrderDetailsListItemInfo>
            </OrderDetailsListItem>
          </OrderDetailsList>
        </OrderDetails>
        <OrderDetailsImage>
          <img src={Deliver} />
        </OrderDetailsImage>
      </SuccessWrapper>
    </SuccessContainer>
  );
}
