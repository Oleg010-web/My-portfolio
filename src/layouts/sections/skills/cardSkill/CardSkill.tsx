import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"


type CardSkillPropsType = {
  iconId: string,
  title: string,
  desription: string

}

export const CardSkill = (props: CardSkillPropsType) => {
  return (
    <CardSkillStyled>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitleStyled>{props.title}</SkillTitleStyled>
        <SkillTextStyled>{props.desription}</SkillTextStyled>
      </FlexWrapper>
    </CardSkillStyled>
  )
}


const CardSkillStyled = styled.div`
  max-width: 380px;
  padding: 62px 20px 40px;
`

const SkillTitleStyled = styled.h3`
  margin: 70px 0 15px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const SkillTextStyled = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`