import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OrderTitle = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
`;
