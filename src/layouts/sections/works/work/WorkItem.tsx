import styled from "styled-components"
import { LinkItem } from "../../../../components/LinkItem"
import { theme } from "../../../../styles/Theme"
import { Button } from "../../../../components/Button"

type WorkItemPropsType = {
  path: string,
  title: string,
  text: string
}

export const WorkItem = (props: WorkItemPropsType)=> {
  return (
    <WorkItemStyled>
      <ImageWrapper>
        <ImageStyled src={props.path}/>
        <Button>VIEW PROJECT</Button>
      </ImageWrapper>
      <Desription>
        <TitleStyled>{props.title}</TitleStyled>
        <TextStyled>{props.text}</TextStyled>
        <LinkItem href="#">demo</LinkItem>
        <LinkItem href="#">code</LinkItem>
      </Desription>
    </WorkItemStyled>
  )
}

const WorkItemStyled = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  object-fit: cover;
  flex-grow: 1;

  ${LinkItem}{
    padding: 10px 0;

    & + ${LinkItem}{
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const ImageStyled = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`



const TitleStyled = styled.h3`
  
`

const TextStyled = styled.p`
  margin-top: 14px;
  margin-bottom: 10px;
`

const Desription = styled.div`
  padding: 25px 20px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before{
      width: 100%;
      height: 100%;
    }
  }

  &::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover{
    ${Button}{
      opacity: 1;
    }

    &::before{
      opacity: 1;
  }
  }

  @media ${theme.media.tablet} {
    ${Button}{
      opacity: 1;
    }

    &::before{
      opacity: 1;
  }
  }
`