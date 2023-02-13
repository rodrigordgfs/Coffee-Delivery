import styled from "styled-components";

export const OurCoffeesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OurCoffeesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 0.5rem;
`;

export const OurCoffeesTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
  margin-top: 2rem;

  @media only screen and (max-device-width: 510px) {
    text-align: center;
  }
`;

export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 54px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-device-width: 510px) and (max-device-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
