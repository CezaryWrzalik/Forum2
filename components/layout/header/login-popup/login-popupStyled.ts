import styled from "styled-components";

export const LoginPopupContainer = styled.div`
  position: absolute;
  top: 65px;
  right: 0px;
  background: ${({theme}) => theme.backgroundSecondary};
  border-radius: 15px;
`;

export const LoginContainer = styled.div`
	padding: 20px 20px;
`

export const InputContainer = styled.div`
  font-size: 0.7rem;
  opacity: 0.9;
`;

export const NoAccContainer = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
  background: #c4c4c4;
  font-size: 0.7rem;
	height: 40px;
	gap: 4px;
	border-radius: 0 0 15px 15px;
	color :black;

	span{
		color: #0b98ce;
		cursor: pointer;
	}
`;

