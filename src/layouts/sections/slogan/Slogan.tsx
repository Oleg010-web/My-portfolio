import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Let's make code together, man!</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 50vh;
  background-color: #70daf4;
`