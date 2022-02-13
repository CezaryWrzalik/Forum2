import { useState } from "react";
import MoonIcon from "../../icons/moon-icon";
import PersonIcon from "../../icons/person-icon";
import SearchIcon from "../../icons/search-icon";
import SunIcon from "../../icons/sun-icon";
import { UIButton } from "../../ui/uiButton";
import {
	Button,
  HeaderContainer,
  LoginContainer,
  MobileLogin,
  OptionsContainer,
  PageTitle,
  PageTitleMobile,
  SearchContainer,
  ThemeSwitch,
  Thumb,
} from "./headerStyled";
import LoginPopup from "./login-popup/login-popup";

type HeaderTypes = {
  toggleTheme: () => void;
};

const Header = (props: HeaderTypes) => {
  const [dark, setDark] = useState(false);
	const [popup, setPopup] = useState(false);

  const handleToggleTheme = () => {
    setDark(!dark);
    props.toggleTheme();
  };


  return (
    <HeaderContainer>
      <PageTitle>Cool forum</PageTitle>
			<PageTitleMobile>CF</PageTitleMobile>
      <SearchContainer>
        <SearchIcon />
        <input type="text" placeholder="Szukaj" />
      </SearchContainer>
      <OptionsContainer>
        <ThemeSwitch onClick={handleToggleTheme}>
          <Thumb dark={dark} />
					{dark ? <SunIcon /> : <MoonIcon />}
        </ThemeSwitch>
        <LoginContainer>
          <Button onClick={() => setPopup(!popup)}>Zaloguj się</Button>
					<MobileLogin onClick={() => setPopup(!popup)}>
						<PersonIcon />
					</MobileLogin>
					{popup && <LoginPopup />}
        </LoginContainer>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
