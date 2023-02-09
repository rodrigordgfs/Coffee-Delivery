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

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;
  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    margin-top: -1.25rem;
  }
`;

export const CoffeeCardTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  gap: 4px;
`;

export const CoffeeCardTagsItem = styled.span`
  padding: 0.25rem 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: 700;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 10px;
  text-transform: uppercase;
`;

export const CoffeeCardTitle = styled.h3`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
  margin-top: 1rem;
  text-align: center;
`;

export const CoffeeCardDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme.label};
  margin-top: 0.5rem;
  text-align: center;
`;

export const CoffeeCardActionsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;
  width: 100%;
`;

export const CoffeeCardPrice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  span:first-child {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }

  span:last-child {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme.text};
    margin-left: 0.25rem;
  }
`;
export const CoffeeCardActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffeeCardQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.button};
  border-radius: 0.375rem;
  padding: 8px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme.title};
  }
`;

export const CoffeeCardQuantityButton = styled.div`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
`;

export const CoffeeCardAddCart = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.purple};
    transition: 0.2s ease-in-out;
  }
`;
