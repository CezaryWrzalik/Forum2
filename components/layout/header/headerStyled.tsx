import styled from "styled-components";

type ThumbType = {
  dark: boolean;
};

export const HeaderContainer = styled.header`
  display: grid;
  grid-template: 30px / minmax(50px, 200px) 1fr minmax(80px, 200px);
  place-items: center;

  border-radius: 15px;
  background: ${({ theme }) => theme.background};
  padding: 15px 30px;
	transition: .5s;

  @media (max-width: 600px) {
    padding: 15px 0;
  }
`;

export const PageTitle = styled.h1`
 @media (max-width: 800px){
	 display: none;
 }
`

export const PageTitleMobile = styled(PageTitle)`
display: block;

@media (min-width: 800px){
	display: none;
}
`

export const SearchContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template: 1fr / 20px minmax(100px, 400px);
  gap: 5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundSecondary};
  height: 30px;
  padding: 0 10px;

  input {
    border: none;
    width: 100%;
    background: inherit;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 100%;
`;

export const ThemeSwitch = styled.div`
  position: relative;
  height: 100%;
  width: 60px;
  padding: 0 3px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 15px;

  svg {
    display: none;
  }

  @media (max-width: 800px) {
    display: grid;
    place-items: center;
    width: 30px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.text};

    svg {
      display: block;
    }
  }
`;

export const Thumb = styled.span`
  position: absolute;
  top: 50%;
  left: ${({ dark }: ThumbType) => `${dark ? "30" : "5"}px`};
  transform: translate(0, -50%);
  height: 25px;
  width: 25px;
  background: ${({ theme }) => theme.text};
  opacity: 0.5;
  border-radius: inherit;
  transition: 0.5s;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  position: relative;
`;

export const Button = styled.button`
  height: 100%;
  border: none;
  width: 100%;
  background: #ffea89;
  padding: 6px 15px;
  border-radius: 15px;
  opacity: 0.9;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileLogin = styled.button`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
	padding: 0;
	background-color: inherit;
	border: 1px solid ${({ theme }) => theme.text};
	border-radius: 5px;

	@media (min-width: 800px){
		display: none;
	}
`;
