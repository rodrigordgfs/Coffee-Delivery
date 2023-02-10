import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 104px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 0.5rem;

  img {
    cursor: pointer;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  cursor: pointer;
`;

export const HeaderCart = styled.div`
  display: flex;
  items-align: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  cursor: pointer;

  span {
    margin-top: -15px;
    margin-right: -35px;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    line-height: 130%;
    font-weight: 700;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
