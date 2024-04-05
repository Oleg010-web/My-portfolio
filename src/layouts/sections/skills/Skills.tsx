import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { CardSkill } from './cardSkill/CardSkill'
import { Container } from '../../../components/Container'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <Container>
        <FlexWrapper wrap='wrap' justify='space-between'>
          <CardSkill
            iconId='codeSvg'
            title='html5'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
          <CardSkill
            iconId='css'
            title='css3'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
          <CardSkill
            iconId='figma'
            title='figma'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
          <CardSkill
            iconId='react'
            title='react'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
          <CardSkill
            iconId='typescript'
            title='typescript'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
          <CardSkill
            iconId='styledComponents'
            title='Styled Components'
            desription='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`


`
