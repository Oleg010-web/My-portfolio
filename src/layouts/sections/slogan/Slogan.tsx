import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Let's make code together, man!</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 50vh;
  background-color: #70daf4;
`