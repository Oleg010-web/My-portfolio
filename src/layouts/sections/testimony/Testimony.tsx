import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Icon } from "../../../components/icon/Icon"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { IconWrapper } from "../skills/cardSkill/CardSkill"
import { Container } from "../../../components/Container"

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <IconWrapper>
            <Icon iconId="quote" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #4eeb78;

  ${IconWrapper}{
    margin-top: 40px;
    margin-bottom: 72px;
  }
`