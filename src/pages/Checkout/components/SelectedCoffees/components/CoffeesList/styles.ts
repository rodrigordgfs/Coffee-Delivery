import styled from "styled-components";

export const ProductOrderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  padding: 8px 0.25rem;
  margin: 1rem 0;
`;

export const ProductOrderItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ProductOrderItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductOrderItemTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
`;

export const ProductOrderItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ProductOrderItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${(props) => props.theme.button};
  border-radius: 0.375rem;
  padding: 8px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.title};
  }
`;

export const ProductOrderItemQuantityIcon = styled.div`
  display: flex;
  items-align: center;
  justify-content: center;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
`;

export const ProductOrderItemRemove = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${(props) => props.theme.button};
  border-radius: 0.375rem;
  padding: 8px;
  cursor: pointer;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.title};
  }
`;

export const ProductOrderItemRemoveIcon = styled.div`
  display: flex;
  items-align: center;
  justify-content: center;
  color: ${(props) => props.theme.purple};
`;

export const ProductOrderItemPrice = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.text};
`;

export const ProductOrderItemDivider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.button};
`;
