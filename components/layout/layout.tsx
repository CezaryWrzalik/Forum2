import React from "react";
import Header from "./header/header";
import { LayoutContainer } from "./layoutStyled";

type LayoutProps = {
	children: JSX.Element;
	toggleTheme: () => void;
}

const Layout = (props: LayoutProps) => {
	
	return(
		<LayoutContainer>
			<Header toggleTheme={props.toggleTheme}/>
			{props.children}
		</LayoutContainer>
	)
}

export default Layout;