import styled from "styled-components";

export const PaymentMehodsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.button};
  border-radius: 0.375rem;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple};
    transition: 0.5s ease-in-out;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const PaymentMehodsItemSelected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${(props) => props.theme["purple-light"]};
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 0.375rem;
  cursor: pointer;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
  }
`;
