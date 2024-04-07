import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Menu } from "../../../components/navigation/Menu"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { WorkItem } from "./work/WorkItem";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import { Container } from "../../../components/Container";

const worksItem = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <Menu MenuItems={worksItem} />
        <FlexWrapper justify="space-between" align="flex-start">
          <WorkItem title="Social Network" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit." path={socialImg} />
          <WorkItem title="Timer" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim" path={timerImg} />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}


const StyledWorks = styled.section`

`