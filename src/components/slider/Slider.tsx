import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"

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
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  border: 1px solid black;
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
  
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: snow;
  }
`