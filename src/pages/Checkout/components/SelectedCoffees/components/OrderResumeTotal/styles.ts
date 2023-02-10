import styled from "styled-components";

export const OrderResumeTotalContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderResumeTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.text};
    :first-child {
      font-size: 14px;
    }

    :last-child {
      font-size: 16px;
    }
  }
`;

export const OrderResumeTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
`;
