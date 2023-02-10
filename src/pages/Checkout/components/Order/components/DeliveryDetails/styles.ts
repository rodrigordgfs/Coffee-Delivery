import styled from "styled-components";

export const DeliveryDetailsWrapper = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.card};
  border-radius: 0.375rem;
`;

export const DeliveryDetailsHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  gap: 0.5rem;
`;

export const DeliveryDetailsHeaderContent = styled.div`
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

export const DeliveryDetailsForm = styled.form`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media only screen and (max-device-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DeliveryDetailsFormInput = styled.input`
  background: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.button};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.text};
  padding: 0.75rem;
  :focus {
    outline: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
