import styled from "styled-components"
import { Logo } from "../components/logo/Logo"
import { Menu } from "../components/navigation/Menu"
import { Container } from "../components/Container";
import { FlexWrapper } from "../components/FlexWrapper";

const menuItem = ["Home", "Skills", "Works", "Testimony", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          <Menu MenuItems={menuItem}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  background-color: #8dfb8f;
  display: flex;
`