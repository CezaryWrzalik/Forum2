import styled from "styled-components";

export const AsideContainer = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
`

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h2 {
    font-size: 0.8rem;
  }
`;

export const ActiveUsersContainer = styled(PopularContainer)``;
