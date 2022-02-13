import styled from "styled-components";

export const ActiveUsersContainer = styled.div`
background-color: red;
display: grid;
grid-template: 40px / 40px 1fr 40px;
gap: 5px;

padding: 10px;
border-radius: 15px;
width: 100%;
background-color: ${({theme}) => theme.backgroundSecondary};

p{
	line-height: 40px;
}

svg{
	height: 20px;
}
`

export const ImageContainer = styled.div`
	

	img{
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`
