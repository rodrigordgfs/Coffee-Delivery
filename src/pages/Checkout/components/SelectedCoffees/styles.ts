import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SelectedCoffeesTitle = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
`;

export const OrderResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background-color: ${(props) => props.theme.card};
  border-radius: 0.375rem 2.75rem;
  padding: 40px;
`;

export const OrderResumeConfirmButton = styled.button`
  height: 46px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  border-radius: 0.375rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
