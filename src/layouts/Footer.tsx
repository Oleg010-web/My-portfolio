import styled from "styled-components"
import { Icon } from "../components/icon/Icon"
import { FlexWrapper } from "../components/FlexWrapper"

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
  min-height: 50vh;
  background-color: #a3d3ff;
`

const StyledName = styled.span`
  
`

const StyledSocialLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`

const SocialLinkItem = styled.li`
  
`

const StyledSocialLink = styled.a`

`

const StyledCopyright = styled.small`
  
`