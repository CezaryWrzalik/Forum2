import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 0 50px;
  width: 80%;
  margin: auto;
  border-radius: 15px;
  margin-bottom: 40px;
  transition: 0.5s;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const NavBarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const NavBarItem = styled.li`
  padding: 15px 0;
  cursor: pointer;
  width: 100%;
  text-align: center;
	font-size: .8rem;

  @media (max-width: 700px) {
    :nth-child(5),
    :nth-child(6) {
      display: none;
    }
  }
`;
