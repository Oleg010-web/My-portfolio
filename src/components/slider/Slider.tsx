import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme"

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <StyledSlide>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</StyledText>
          <StyledName>@ivan ivanow</StyledName>
        </StyledSlide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSlide = styled.div`
  width: 100%;
  text-align: center;
`

const StyledText = styled.p`
  
`

const StyledName = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.font};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 42px;
  margin-top: 22px;
  display: inline-block;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`