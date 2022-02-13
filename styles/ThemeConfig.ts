import { createGlobalStyle} from "styled-components";
import { customTheme } from "../types/theme-types";

export const lightTheme = {
  body: "#F4F4F4",
  text: "#3D4443",
  toggleBorder: "#FFF",
  background: "#FFFFFF",
	backgroundSecondary: '#F1F1F0',

};

export const darkTheme = {
  body: "#242424",
  text: "#c2d3d0",
  toggleBorder: "#6B8096",
  background: "rgb(26, 26, 26)",
	backgroundSecondary: 'rgb(49, 49, 49)',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: customTheme) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Montserrat, Tahoma, Helvetica, Arial, Roboto, sans-serif;
		margin: 20px 150px;
    transition: all 0.50s linear;
  }
	
	h1,h2,h3,h4, p{
		margin: 0;
	}

	svg {
		fill: ${({theme}) => theme.text};
		width: 100%;
		height: 100%;
	}

	input{
		color: inherit;
	}

	input:focus{
		outline: none;
	}

	@media (max-width: 1200px){
		body{
			margin: 10px 0;
		}
	}
`;
