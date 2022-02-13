import styled from "styled-components";

export const PopularContainer = styled.div`
	display: grid;
	grid-template: 1fr 15px / 90px 1fr;
	padding: 10px;
	gap: 5px;
	background-color: ${({theme}) => theme.backgroundSecondary};
	border-radius: 15px;
`

export const ImageContainer = styled.div`

grid-area: 1 / 1 / 3 / 2;

img{
	object-fit: cover;
	width: 100%;
	height: 100%;
	border-radius: 15px;
}
`

export const TitleContainer = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
	height: 2.5rem;
	font-size: .7rem;
`;

export const ReactionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;

	div{
		display: grid;
		grid-template: 1fr / 15px 15px 1fr;
		gap: 2px;
		height: 100%;
		font-size: .7rem;
	}
	
`;