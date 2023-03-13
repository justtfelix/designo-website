import React from 'react';
import { FooterContent, Container } from "../components";
import { Header } from "./header";

function Footer() {
  return (
    <FooterContent>
      <Container>
        <Header isLightBg={false} />
      </Container>
    </FooterContent>
  )
}

export default Footer;