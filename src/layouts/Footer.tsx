import styled from "styled-components"
import { Icon } from "../components/icon/Icon"
import { FlexWrapper } from "../components/FlexWrapper"
import { theme } from "../styles/Theme"

export const Footer = () => {
  return (
    <FooterStyled>
      <FlexWrapper direction="column" align="center">
        <StyledName>Oleg</StyledName>
        <StyledSocialLinks>
          <SocialLinkItem>
            <StyledSocialLink>
              <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="instagram" />
            </StyledSocialLink>
          </SocialLinkItem>
          <SocialLinkItem>
            <StyledSocialLink>
              <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="telegram" />
            </StyledSocialLink>
          </SocialLinkItem>
          <SocialLinkItem>
            <StyledSocialLink>
              <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="linkedin" />
            </StyledSocialLink>
          </SocialLinkItem>
          <SocialLinkItem>
            <StyledSocialLink>
              <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="vk" />
            </StyledSocialLink>
          </SocialLinkItem>
        </StyledSocialLinks>
        <StyledCopyright>© 2024 Oleg Nesterov, All Rights Reserved.</StyledCopyright>
      </FlexWrapper>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const StyledName = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`

const StyledSocialLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 30px 0;

`

const SocialLinkItem = styled.li`
  
`

const StyledSocialLink = styled.a`
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const StyledCopyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`