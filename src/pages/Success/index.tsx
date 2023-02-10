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

export function Success() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <span>Cartão de Crédito</span>
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
