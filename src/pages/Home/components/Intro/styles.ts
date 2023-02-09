import styled from "styled-components";
import Background from "../../../../assets/Background.png";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${Background});
`;

export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 0.5rem;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;
`;

export const IntroTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme.title};
`;

export const IntroSubtitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme.subtitle};
  margin-top: 1rem;
`;

export const IntroItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  margin-top: 4.125rem;
`;

export const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  gap: 1.25rem;
`;
export const IntroListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

export const IntroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
