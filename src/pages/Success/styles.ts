import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const SuccessWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  padding: 0 0.5rem;
  margin-top: 80px;
  gap: 2rem;

  @media only screen and (max-device-width: 1024px) {
    flex-direction: column;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OrderDetailsTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 900;
  color: ${({ theme }) => theme["yellow-dark"]};

  @media only screen and (max-device-width: 510px) {
    text-align: center;
  }
`;

export const OrderDetailsSubtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.subtitle};
  margin-top: 0.25rem;

  @media only screen and (max-device-width: 510px) {
    text-align: center;
  }
`;

export const OrderDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme["yellow-dark"]};
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  gap: 2rem;
`;

export const OrderDetailsListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  @media only screen and (max-device-width: 510px) {
    flex-direction: column;
  }
`;

export const OrderDetailsListItemInfo = styled.div`
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
  }

  span {
    font-weight: 700;
  }

  @media only screen and (max-device-width: 510px) {
    text-align: center;
  }
`;

export const OrderDetailsImage = styled.div`
  flex: 1;
  display: flex;
  items-align: center;
  justify-content: center;

  img {
    width: 75%;
  }
`;
