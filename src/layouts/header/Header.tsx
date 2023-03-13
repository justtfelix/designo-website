import React from 'react';
import { Link } from "react-router-dom";
import { LogoDark, LogoLight } from "../../assets";
import { ContentColor } from '../../interfaces';
import { HeaderContent, Container, FlexBox, Logo } from "../../components";
import Navigation from "./Navigation";

function Header(props: ContentColor) {
  const { isLightBg } = props;

  return (
    <HeaderContent>
      <Container>
        <FlexBox>
          <Link to="/">
            <Logo src={isLightBg ? LogoDark : LogoLight} alt="Logo" />
          </Link>
          <Navigation isLightBg={isLightBg} />
        </FlexBox>
      </Container> 
    </HeaderContent>
  )
}

export default Header;