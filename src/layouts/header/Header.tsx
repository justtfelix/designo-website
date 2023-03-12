import React from 'react';
import { Link } from "react-router-dom";
import { LogoDark } from "../../assets";
import { HeaderContent, Container, FlexBox, Logo } from "../../components";
import Navigation from "./Navigation";

function Header() {
  return (
    <HeaderContent>
      <Container>
        <FlexBox>
          <Link to="/">
            <Logo src={LogoDark} alt="Logo" />
          </Link>
          <Navigation />
        </FlexBox>
      </Container> 
    </HeaderContent>
  )
}

export default Header;