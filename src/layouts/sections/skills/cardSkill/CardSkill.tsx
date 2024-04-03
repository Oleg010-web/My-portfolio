import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"


type CardSkillPropsType = {
  iconId: string,
  title: string,
  desription: string

}

export const CardSkill = (props : CardSkillPropsType) => {
  return (
    <CardSkillStyled>
      <Icon iconId={props.iconId} />
      <SkillTitleStyled>{props.title}</SkillTitleStyled>
      <SkillTextStyled>{props.desription}</SkillTextStyled>
    </CardSkillStyled>
  )
}


const CardSkillStyled = styled.div`
  width: 30%;
  color: #424def;
  background-color: #b29bf7;
  margin: 10px;
`

const SkillTitleStyled = styled.h3`
  
`

const SkillTextStyled = styled.p`
  
`