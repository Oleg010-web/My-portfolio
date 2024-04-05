import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"}>
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

  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const StyledMainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  line-height: 40px;
`

const Greetings = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

const StyledName = styled.h2`
  font-family: 'Josefin Sans';
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 1;

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
`