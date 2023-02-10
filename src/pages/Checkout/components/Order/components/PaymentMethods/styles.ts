import styled from "styled-components";

export const PaymentMehodsWrapper = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.card};
  border-radius: 0.375rem;
`;

export const PaymentMehodsHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  gap: 0.5rem;
`;

export const PaymentMehodsHeaderContent = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.text};

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const PaymentMehodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem;
  margin-top: 2rem;

  @media only screen and (min-device-width: 510px) and (max-device-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
