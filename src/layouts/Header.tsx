import styled from "styled-components"
import { Logo } from "../components/logo/Logo"
import { Container } from "../components/Container";
import { FlexWrapper } from "../components/FlexWrapper";
import { HeaderMenu } from "./header/HeaderMenu";
import { HeaderMobileMenu } from "./header/HeaderMobileMenu";

const menuItem = ["Home", "Skills", "Works", "Testimony", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          <HeaderMenu MenuItems={menuItem}/>
          <HeaderMobileMenu MenuItems={menuItem}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0;
  background: rgba(31,31,32, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`