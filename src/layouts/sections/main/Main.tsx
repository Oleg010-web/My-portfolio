import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <StyledName>I am Oleg Nesterov</StyledName>
          <StyledMainTitle>A Web Developer</StyledMainTitle>
        </div>
        <StyledPhoto src={myPhoto} alt='' />
      </FlexWrapper>
    </StyledMain>
  )
}


const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #bb2b2b;
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const StyledMainTitle = styled.h1`
  
`

const StyledName = styled.span`
  
`