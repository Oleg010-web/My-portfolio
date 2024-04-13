import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Command'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap='wrap'>
          <div>
            <Greetings>Hi There</Greetings>
            <StyledName>I am <span>Oleg Nesterov</span></StyledName>
            <StyledMainTitle>A Web Developer</StyledMainTitle>
          </div>
          <PhotoStub>
            <StyledPhoto src={myPhoto} alt='' />
          </PhotoStub>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}


const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #c82d2d;
  display: flex;
`
const PhotoStub = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 65px;

  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mabile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mabile} {
    width: 310px;
    height: 380px;
  }
`
const StyledMainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

const Greetings = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

const StyledName = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
  line-height: 50px;
  margin: 10px 0;


  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mabile} {
    margin-top: 15px;
    margin-bottom: 22px;
  }
`