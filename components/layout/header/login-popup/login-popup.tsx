import { UIButton } from "../../../ui/uiButton";
import { UiInput } from "../../../ui/uiInput";
import {
  InputContainer,
  LoginContainer,
  LoginPopupContainer,
  NoAccContainer,
} from "./login-popupStyled";

const LoginPopup = () => {
  return (
    <LoginPopupContainer>
      <LoginContainer>
        <InputContainer>
          <label htmlFor="">Nazwa użytownika lub email</label>
          <UiInput />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Hasło</label>
          <UiInput />
        </InputContainer>
        <UIButton>Zaloguj się</UIButton>
      </LoginContainer>
      <NoAccContainer>
        Nie masz konta? <span>Zarejestruj się</span>
      </NoAccContainer>
    </LoginPopupContainer>
  );
};

export default LoginPopup;
