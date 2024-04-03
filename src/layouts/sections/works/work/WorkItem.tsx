import styled from "styled-components"

type WorkItemPropsType = {
  path: string,
  title: string,
  text: string
}

export const WorkItem = (props: WorkItemPropsType)=> {
  return (
    <WorkItemStyled>
      <ImageStyled src={props.path}/>
      <TitleStyled>{props.title}</TitleStyled>
      <TextStyled>{props.text}</TextStyled>
      <LinkStyled href="#">demo</LinkStyled>
      <LinkStyled href="#">code</LinkStyled>
    </WorkItemStyled>
  )
}

const WorkItemStyled = styled.div`
  background-color: #e1b226;
  max-width: 540px;
  width: 100%;
  object-fit: cover;
`

const ImageStyled = styled.img`
  width: 100%;
  height: 260px;
`

const LinkStyled = styled.a`
  
`

const TitleStyled = styled.h3`
  
`

const TextStyled = styled.p`
  
`