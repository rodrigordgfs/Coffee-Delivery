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
  margin-top: 2.5rem;
  gap: 2rem;

  @media only screen and (max-device-width: 1024px) {
    flex-direction: column;
  }
`;
